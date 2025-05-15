import { ExpensesOutput } from '../components/ExpensesOutput';
import { useContext } from 'react';
import { ExpenseContext } from '../store/expense-context';

export const AllExpenses = () => {
  const expenseCtx = useContext(ExpenseContext);
  return (
    <ExpensesOutput
      expenses={expenseCtx.expenses}
      expensesPeriod="Total"
      fallbackText={'You Should Go Spend Money'}
    />
  );
};
