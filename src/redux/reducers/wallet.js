import { RECEIVE_CURRENCIES_SUCCESS } from '../actions/currencies';

// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {
  wallet: {
    currencies: [],
    expenses: [],
    editor: false,
    idToEdit: 0,
  },
};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case RECEIVE_CURRENCIES_SUCCESS:
    return {
      ...state,
      currencies: action.currencies,
    };
  default:
    return state;
  }
};

export default wallet;
