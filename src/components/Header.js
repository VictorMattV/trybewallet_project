import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../styles/header.css';

class Header extends Component {
  render() {
    const { emailSaved, expenses } = this.props;
    return (
      <header>
        <Link to="/" className="title">
          <h3>Trybewallet</h3>
        </Link>
        <section>
          <div className="email_container">
            <p data-testid="email-field">
              Email:
              {' '}
              {emailSaved}
            </p>
          </div>
          <div className="total_container">
            <p data-testid="total-field">
              Total:
              {' '}
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
        </section>
      </header>
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
