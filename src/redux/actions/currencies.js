import getCurrenciesInfo from '../../services/currenciesApi';

export const RECEIVE_CURRENCIES_SUCCESS = 'RECEIVE_CURRENCIES_SUCCESS';

export const receiveCurrenciesSuccess = (currencies) => ({
  type: RECEIVE_CURRENCIES_SUCCESS,
  currencies,
});

export function fetchCurrencies() {
  return async (dispatch) => {
    // fetch api
    const response = await getCurrenciesInfo();
    dispatch(receiveCurrenciesSuccess(Object.keys(response)
      .filter((currency) => currency !== 'USDT')));
  };
}
