import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  componentDidMount() {

  }

  render() {
    const { emailSaved, expenses } = this.props;
    console.log(expenses);
    return (
      <div>

        <div>
          <p data-testid="email-field">
            {emailSaved}
          </p>
          <p data-testid="total-field">
            {
              expenses.reduce((acc, curr) => (
                acc + Number(curr.value) * Number(curr.exchangeRates[curr.currency].ask)
              ), 0).toFixed(2)
            }
          </p>
          <p data-testid="header-currency-field">
            BRL
          </p>
        </div>

      </div>
    );
  }
}

Header.propTypes = {
  emailSaved: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(Object).isRequired,
};

const mapStateToProps = (state) => ({
  emailSaved: state.user.email,
  expenses: state.wallet.expenses,
});

export default connect(mapStateToProps)(Header);
