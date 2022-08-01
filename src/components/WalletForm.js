import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCurrencies } from '../redux/actions/currencies';
import { fetchExchange } from '../redux/actions/expenses';

class WalletForm extends Component {
  constructor() {
    super();

    this.state = {
      id: 0,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'alimentação',
    };
  }

  componentDidMount() {
    const { saveCurrenciesInfo } = this.props;
    saveCurrenciesInfo();
  }

  saveStateinfo = () => {
    const { saveExpense } = this.props;
    saveExpense(this.state);
    this.setState((prev) => ({
      id: prev.id + 1,
      value: '',
      description: '',
      currency: 'USD',
      method: 'Dinheiro',
      tag: 'Alimentação',
    }));
  }

  onchange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { currencies } = this.props;
    const { value, description, currency, method, tag } = this.state;
    return (
      <div>
        {currencies
          ? (
            <form>

              <label htmlFor="valueInput">
                Valor da despesa:
                <input
                  id="valueInput"
                  data-testid="value-input"
                  name="value"
                  value={ value }
                  onChange={ this.onchange }
                />
              </label>

              <label htmlFor="description">
                Descrição da despesa:
                <input
                  id="description"
                  data-testid="description-input"
                  name="description"
                  value={ description }
                  onChange={ this.onchange }
                />
              </label>

              <label htmlFor="moeda">
                Moeda:
                <select
                  id="moeda"
                  data-testid="currency-input"
                  name="currency"
                  value={ currency }
                  onChange={ this.onchange }
                >
                  {currencies.map((element) => (
                    <option value={ element } key={ element }>
                      {element}
                    </option>))}
                </select>
              </label>
              <label htmlFor="payment">
                Método e pagamento:
                <select
                  id="payment"
                  data-testid="method-input"
                  name="method"
                  value={ method }
                  onChange={ this.onchange }
                >
                  <option value="Dinheiro">Dinheiro</option>
                  <option value="Cartão de crédito">Cartão de crédito</option>
                  <option value="Cartão de débito">Cartão de débito</option>
                </select>
              </label>

              <label htmlFor="tag">
                <select
                  id="tag"
                  data-testid="tag-input"
                  name="tag"
                  value={ tag }
                  onChange={ this.onchange }
                >
                  <option value="Alimentação">Alimentação</option>
                  <option value="Lazer">Lazer</option>
                  <option value="Trabalho">Trabalho</option>
                  <option value="Transporte">Transporte</option>
                  <option value="Saúde">Saúde</option>
                </select>
              </label>
              <button
                type="button"
                onClick={ this.saveStateinfo }
              >
                Adicionar despesa

              </button>
            </form>
          ) : 'error'}
      </div>
    );
  }
}

WalletForm.propTypes = {
  currencies: PropTypes.arrayOf(PropTypes.string).isRequired,
  map: PropTypes.func.isRequired,
  saveCurrenciesInfo: PropTypes.func.isRequired,
  saveExpense: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
  expenses: state.wallet.expenses,
});

const mapDispatchToProps = (dispatch) => ({
  saveCurrenciesInfo: () => dispatch(fetchCurrencies()),
  saveExpense: (expenseInfo) => dispatch(fetchExchange(expenseInfo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
