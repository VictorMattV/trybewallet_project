import { SAVE_EMAIL } from '../actions';

// Esse reducer será responsável por tratar as informações da pessoa usuária
const INITIAL_STATE = {
  email: '', // string que armazena o email da pessoa usuária
};

const user = (state = INITIAL_STATE, action) => {
  const { email } = action;
  switch (action.type) {
  case SAVE_EMAIL:
    return {
      ...state,
      email,
    };
  default:
    return state;
  }
};

export default user;
