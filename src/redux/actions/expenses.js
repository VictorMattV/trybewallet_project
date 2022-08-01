import getCurrenciesInfo from '../../services/currenciesApi';

export const SAVE_EXPENSES = 'SAVE_EXPENSES';

export const saveExpensesAction = (currencies, expenseInfo) => ({
  type: SAVE_EXPENSES,
  expense: { ...expenseInfo, exchangeRates: currencies },

});

export const fetchExchange = (expenseInfo) => async (dispatch) => {
  const response = await getCurrenciesInfo();
  const result = dispatch(saveExpensesAction(response, expenseInfo));
  console.log(result);
};
