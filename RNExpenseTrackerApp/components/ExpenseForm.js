import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { getFormattedDate } from '../utils/dates';
import { GlobalStyles } from '../utils/colors';
import { FormInput } from './FormInput';
import { Button } from './Button';

export const ExpenseForm = ({
  submitButtonLabel,
  onCancel,
  onSubmit,
  defaultValues,
}) => {
  const [inputs, setInputs] = useState({
    amount: {
      value: defaultValues ? defaultValues.amount?.toString() : '',
      isValid: true,
    },
    date: {
      value: defaultValues ? getFormattedDate(defaultValues?.date) : '',
      isValid: true,
    },
    description: {
      value: defaultValues ? defaultValues.description : '',
      isValid: true,
    },
  });

  const inputChangeHandler = (inputIdentifier, enteredValue) =>
    setInputs(currentInputs => ({
      ...currentInputs,
      [inputIdentifier]: { value: enteredValue, isValid: true },
    }));

  const submitHandler = () => {
    const expenseData = {
      amount: +inputs.amount.value,
      date: new Date(inputs.date.value),
      description: inputs.description.value,
    };

    const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
    const dateIsValid = expenseData.date.toString() !== 'Invalid Date';
    const descriptionIsValid = expenseData.description.trim().length > 0;

    if (!amountIsValid || !dateIsValid || !descriptionIsValid) {
      setInputs(currentInputs => {
        return {
          amount: { value: currentInputs.amount.value, isValid: amountIsValid },
          date: { value: currentInputs.date.value, isValid: dateIsValid },
          description: {
            value: currentInputs.description.value,
            isValid: descriptionIsValid,
          },
        };
      });
      return;
    }

    onSubmit(expenseData);
  };

  const formIsInvald =
    !inputs.amount.isValid ||
    !inputs.date.isValid ||
    !inputs.description.isValid;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Expense</Text>
      <View style={styles.amountDateContainer}>
        <FormInput
          label="Amount"
          style={styles.rowInput}
          invalid={!inputs.amount.isValid}
          textInputConfig={{
            value: inputs.amount.value,
            keyboardType: 'decimal-pad',
            onChangeText: inputChangeHandler.bind(this, 'amount'),
          }}
        />

        <FormInput
          label="Date"
          style={styles.rowInput}
          invalid={!inputs.date.isValid}
          textInputConfig={{
            value: inputs.date.value,
            onChangeText: inputChangeHandler.bind(this, 'date'),
            placeholder: 'YYYY-MM-DD',
            maxLength: 10,
          }}
        />
      </View>
      <FormInput
        label="Description"
        invalid={!inputs.description.isValid}
        textInputConfig={{
          value: inputs.description.value,
          onChangeText: inputChangeHandler.bind(this, 'description'),
          multiline: true,
        }}
      />

      {formIsInvald && (
        <Text style={styles.errorText}>
          Invalid Data input, please correct the errors above
        </Text>
      )}

      <View style={styles.buttons}>
        <Button mode="flat" onPress={onCancel} style={styles.button}>
          Cancel
        </Button>
        <Button onPress={submitHandler} style={styles.button}>
          {submitButtonLabel}
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginTop: 40 },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: GlobalStyles.colors.primary100,
    marginVertical: 24,
    textAlign: 'center',
  },
  amountDateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowInput: { flex: 1 },
  errorText: {
    textAlign: 'center',
    color: GlobalStyles.colors.error50,
    margin: 8,
  },
  button: {
    minWidth: 120,
    marginHorizontal: 8,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
