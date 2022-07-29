const CURRENCIES_API = 'https://economia.awesomeapi.com.br/json/all';

const getCurrenciesInfo = async () => {
  const response = await fetch(CURRENCIES_API);
  const json = await response.json();

  return response.ok ? Promise.resolve(json) : Promise.reject(json);
};

export default getCurrenciesInfo;
