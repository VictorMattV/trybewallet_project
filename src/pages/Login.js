import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import saveEmailAction from '../redux/actions/index';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      disableBtn: true,
    };
  }

  checkpass = () => {
    const { password } = this.state;
    const magicNumber = 6;
    if (password.length >= magicNumber) {
      return true;
    }
  }

  checkmail = () => {
    const { email } = this.state;
    if (email.includes('@') && email.includes('.com')) { return true; }
  }

  onChange = ({ target }) => {
    const { value, type } = target;
    this.setState({ [type]: value }, () => {
      if (this.checkmail() === true && this.checkpass() === true) {
        this.setState({
          disableBtn: false,
        });
      } else {
        this.setState({
          disableBtn: true,
        });
      }
    });
  }

  render() {
    const { disableBtn, email, password } = this.state;
    const { history, saveEmailState } = this.props;
    return (
      <div>
        Login
        <form>
          <label htmlFor="email">
            email:
            <input
              data-testid="email-input"
              value={ email }
              type="email"
              onChange={ this.onChange }
            />
          </label>
          <label htmlFor="password">
            senha:
            <input
              data-testid="password-input"
              value={ password }
              type="password"
              onChange={ this.onChange }
            />
          </label>
          <button
            type="button"
            disabled={ disableBtn }
            onClick={ () => {
              saveEmailState(email);
              history.push('/carteira');
            } }
          >
            Entrar
          </button>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.func.isRequired,
  saveEmailState: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  saveEmailState: (email) => dispatch(saveEmailAction(email)),
});

export default connect(null, mapDispatchToProps)(Login);
