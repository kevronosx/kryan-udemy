import { useContext, useEffect, useState } from 'react';

import { getDateMinusDays } from '../utils/dates';
import { getExpenses } from '../utils/http';
import { ExpenseContext } from '../store/expense-context';
import { ExpensesOutput } from '../components/ExpensesOutput';
import { LoadingOverlay } from '../components/LoadingOverlay';
import { ErrorOverlay } from '../components/ErrorOverlay';

export const RecentExpenses = () => {
  const expenseCtx = useContext(ExpenseContext);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      try {
        const expenses = await getExpenses();
        expenseCtx.setExpenses(expenses);
      } catch (error) {
        setError('Could not load expenses!');
      }
      setIsLoading(false);
    })();
  }, [getExpenses]);

  const recentExpenses = expenseCtx.expenses.filter(expense => {
    const today = new Date();
    const date7DaysAgo = getDateMinusDays(today, 7);
    return expense.date >= date7DaysAgo && expense.date <= today;
  });

  const errorHandler = () => setError(null);

  if (isLoading) {
    return <LoadingOverlay />;
  }

  if (error && !isLoading) {
    return <ErrorOverlay message={error} onConfirm={errorHandler} />;
  }

  return (
    <ExpensesOutput
      expenses={recentExpenses}
      expensesPeriod="last 7 days"
      fallbackText={'No expenses in tha past 7 days'}
    />
  );
};
