import React from 'react';
import Header from '../components/Header';
import Table from '../components/Table';
import WalletForm from '../components/WalletForm';

class Wallet extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Header />
          <WalletForm />
          <Table />
        </div>
      </div>);
  }
}

export default Wallet;
