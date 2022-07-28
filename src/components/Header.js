import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { emailSaved } = this.props;
    return (
      <div>
        Header
        <p data-testid="email-field">
          {emailSaved}
        </p>
        <p data-testid="total-field">
          0
        </p>
        <p data-testid="header-currency-field">
          BRL
        </p>
      </div>
    );
  }
}

Header.propTypes = {
  emailSaved: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  emailSaved: state.user.email,
});

export default connect(mapStateToProps)(Header);
