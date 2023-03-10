import { RECEIVE_CURRENCIES_SUCCESS } from '../actions/currencies';
import { REMOVE_EXPENSE, SAVE_EXPENSES } from '../actions/expenses';

// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
const INITIAL_STATE = {

  currencies: [],
  expenses: [],
  editor: false,
  idToEdit: 0,

};

const wallet = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case RECEIVE_CURRENCIES_SUCCESS:
    return {
      ...state,
      currencies: action.currencies,
    };
  case SAVE_EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, action.expense],
    };
  case REMOVE_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses].filter((element) => element.id !== action.id),
    };
  default:
    return state;
  }
};

export default wallet;
