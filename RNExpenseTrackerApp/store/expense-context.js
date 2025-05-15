import { createContext, useReducer } from 'react';

export const ExpenseContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: id => {},
  updateExpense: (id, { description, amount, date }) => {},
  setExpenses: expenses => {},
});

const expensesReducer = (state, action) => {
  switch (action.type) {
    case 'ADD':
      return [action.payload, ...state];

    case 'SET':
      const inverted = action.payload.reverse();
      return inverted;

    case 'UPDATE':
      const updateIndex = state.findIndex(
        expense => expense.id === action.payload.id
      );
      const updateExpense = state[updateIndex];
      const updatedItem = { ...updateExpense, ...action.payload.expense };
      const updatedExpenses = [...state];
      updatedExpenses[updateIndex] = updatedItem;
      return updatedExpenses;

    case 'DELETE':
      return state.filter(expense => expense.id !== action.payload);

    default:
      return state;
  }
};

export const ExpenseContextProvider = ({ children }) => {
  const [expenses, dispatch] = useReducer(expensesReducer, []);

  const addExpense = expense => dispatch({ type: 'ADD', payload: expense });

  const deleteExpense = id => dispatch({ type: 'DELETE', payload: id });

  const updateExpense = (id, expense) =>
    dispatch({ type: 'UPDATE', payload: { id, expense } });

  const setExpenses = expenses => dispatch({ type: 'SET', payload: expenses });

  const value = {
    expenses,
    addExpense,
    deleteExpense,
    updateExpense,
    setExpenses,
  };

  return (
    <ExpenseContext.Provider value={value}>{children}</ExpenseContext.Provider>
  );
};
