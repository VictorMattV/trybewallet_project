import getCurrenciesInfo from '../../services/currenciesApi';

export const SAVE_EXPENSES = 'SAVE_EXPENSES';

export const saveExpensesAction = (currencies, expenseInfo) => ({
  type: SAVE_EXPENSES,
  expense: { ...expenseInfo, exchangeRates: currencies },

});

export const fetchExchange = (expenseInfo) => async (dispatch) => {
  const response = await getCurrenciesInfo();
  return dispatch(saveExpensesAction(response, expenseInfo));
};

export const REMOVE_EXPENSE = 'REMOVE_EXPENSE';

export const removeExpenseAction = (id) => ({
  type: REMOVE_EXPENSE,
  id,
});
