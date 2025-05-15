import { useLayoutEffect, useContext, useState } from 'react';
import { View, StyleSheet } from 'react-native';

import { storeExpense, updateExpenses, deleteExpenses } from '../utils/http';
import { GlobalStyles } from '../utils/colors';
import { ExpenseContext } from '../store/expense-context';
import { IconButton } from '../components/IconButton';
import { ExpenseForm } from '../components/ExpenseForm';
import { LoadingOverlay } from '../components/LoadingOverlay';
import { ErrorOverlay } from '../components/ErrorOverlay';

export const ManageExpense = ({ route, navigation }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const editedExpenseId = route?.params?.expenseId;
  const expenseCtx = useContext(ExpenseContext);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: editedExpenseId ? 'Edit Expense' : 'Add Expense',
    });
  }, [navigation, editedExpenseId]);

  const selectedExpense = expenseCtx.expenses.find(
    expense => expense.id === editedExpenseId
  );

  const closeOverlay = () => navigation.goBack();

  const deleteExpenseHandler = async () => {
    setIsSubmitting(true);
    try {
      await deleteExpenses(editedExpenseId);
      expenseCtx.deleteExpense(editedExpenseId);
      closeOverlay();
    } catch (error) {
      setError(`Could not DELETE expense! ${error}`);
      setIsSubmitting(false);
    }
  };

  const confirmHandler = async expenseData => {
    setIsSubmitting(true);
    try {
      if (editedExpenseId) {
        expenseCtx.updateExpense(editedExpenseId, expenseData);
        await updateExpenses(editedExpenseId, expenseData);
      } else {
        const id = await storeExpense(expenseData);
        expenseCtx.addExpense({ ...expenseData, id: id });
      }
      closeOverlay();
    } catch (error) {
      setError(`Could not save data - please try again`);
      setIsSubmitting(false);
    }
  };

  if (error && !isSubmitting) {
    return <ErrorOverlay message={error} />;
  }

  if (isSubmitting) {
    return <LoadingOverlay />;
  }

  return (
    <View style={styles.container}>
      <ExpenseForm
        onCancel={closeOverlay}
        submitButtonLabel={editedExpenseId ? 'Update' : 'Add'}
        onSubmit={confirmHandler}
        defaultValues={selectedExpense}
      />

      {editedExpenseId && (
        <View style={styles.deleteContainer}>
          <IconButton
            icon="trash"
            color={GlobalStyles.colors.error500}
            size={24}
            onPress={deleteExpenseHandler}
          />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: GlobalStyles.colors.primary800,
  },
  deleteContainer: {
    marginTop: 16,
    paddingTop: 8,
    borderTopWidth: 2,
    borderTopColor: GlobalStyles.colors.primary200,
    alignItems: 'center',
  },
});
