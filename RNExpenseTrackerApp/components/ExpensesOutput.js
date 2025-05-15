import { View, Text, StyleSheet } from 'react-native';
import { GlobalStyles } from '../utils/colors';
import { ExpensesSummary } from './ExpensesSummary';
import { ExpensesList } from './ExpensesList';

export const ExpensesOutput = ({ expenses, expensesPeriod, fallbackText }) => {
  return (
    <View style={styles.container}>
      <ExpensesSummary expenses={expenses} periodName={expensesPeriod} />
      {expenses?.length > 0 ? (
        <ExpensesList expenses={expenses} />
      ) : (
        <View style={styles.inforTextContainer}>
          <Text style={styles.inforText}>{fallbackText}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    backgroundColor: GlobalStyles.colors.primary700,
  },
  inforTextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  inforText: {
    fontSize: 24,
    color: GlobalStyles.colors.light,
    textAlign: 'center',
  },
});
