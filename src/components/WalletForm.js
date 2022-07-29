import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCurrencies } from '../redux/actions/currencies';

class WalletForm extends Component {
  componentDidMount() {
    const { saveCurrenciesInfo } = this.props;
    saveCurrenciesInfo();
  }

  render() {
    const { currencies } = this.props;
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
                />
              </label>

              <label htmlFor="description">
                Descrição da despesa:
                <input
                  id="description"
                  data-testid="description-input"
                />
              </label>

              <label htmlFor="moeda">
                Moeda:
                <select
                  id="moeda"
                  data-testid="currency-input"
                >
                  {currencies.map((element) => (
                    <option value={ element } key={ element }>
                      {element}
                    </option>))}
                </select>
              </label>
              <label htmlFor="payment">
                <select
                  id="payment"
                  data-testid="method-input"
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
                >
                  <option value="Alimentação">Alimentação</option>
                  <option value="Lazer">Lazer</option>
                  <option value="Trabalho">Trabalho</option>
                  <option value="Transporte">Transporte</option>
                  <option value="Saúde">Saúde</option>
                </select>
              </label>

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
};

const mapStateToProps = (state) => ({
  currencies: state.wallet.currencies,
});

const mapDispatchToProps = (dispatch) => ({
  saveCurrenciesInfo: () => dispatch(fetchCurrencies()),
});

export default connect(mapStateToProps, mapDispatchToProps)(WalletForm);
