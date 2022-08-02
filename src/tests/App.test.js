import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import App from '../App';
import Wallet from '../pages/Wallet';
import { renderWithRedux, renderWithRouterAndRedux } from './helpers/renderWith';

describe('Testes na aplicação' , () => {

  it('Testa se é renderizado os inputs de email e senha na tela de login', () => {
    renderWithRouterAndRedux(<App />);
    const emailInput = screen.getByTestId('email-input')
    expect(emailInput).toBeInTheDocument();
    
    const passwordInput = screen.getByTestId('password-input')
    expect(passwordInput).toBeInTheDocument();
    
    const btn = screen.getByText(/entrar/i);
    expect(btn).toBeInTheDocument();
  });
  
  it('Testa se o botão entrar, só é habilitado se os campos de input forem validados', () => {
    renderWithRouterAndRedux(<App />);
    const btn = screen.getByRole('button', {name: /entrar/i });
    expect(btn.disabled).toBe(true);

    const emailInput = screen.getByTestId('email-input');
    userEvent.type(emailInput, 'teste123@.com' );
    
    const passwordInput = screen.getByTestId('password-input');
    userEvent.type(passwordInput, 'teste1');
    
    expect(btn.disabled).toBe(false);
  });
  
  it('Testa se os elementos de login estão renderizados na rota /', () => {
    const {history} = renderWithRouterAndRedux(<App />)
    const {pathname} = history.location
    
    const emailInput = screen.getByTestId('email-input');
    expect(emailInput).toBeInTheDocument();
    
    const passwordInput = screen.getByTestId('password-input');
    expect(passwordInput).toBeInTheDocument();
    
    const btn = screen.getByRole('button', {name: /entrar/i});
    expect(btn).toBeInTheDocument();
    
    expect(pathname).toBe('/');
  });
  
  it('Testa se o email do usuário é renderizado no Header', () => {
    renderWithRedux(<Wallet />);
    
    const emailInput = screen.getByTestId('email-field');
    expect(emailInput).toBeInTheDocument;
    
  });
});
  
  

