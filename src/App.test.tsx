import React from 'react';
import { render, screen } from '@testing-library/react';
// import App from './App';
import Hero from './components/Hero';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getAllByText('Flor do Tojal');
//   console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>', linkElement);
//   expect(linkElement).toBeInTheDocument();
// });

test('renders hero component', () => {
  render(<Hero />);
  const heroElement = screen.getByText('Mais de 10 Anos de Tradição e Sabor no Coração de Portugal');
  expect(heroElement).toBeInTheDocument();
});