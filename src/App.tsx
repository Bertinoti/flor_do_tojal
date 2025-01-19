import React from 'react';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import FeaturedDishes from './components/FeaturedDishes';
import ReservationForm from './components/ReservationForm';
import Footer from './components/Footer';

const theme = createTheme({
  palette: {
    primary: {
      main: '#FFD700', // Yellow
    },
    secondary: {
      main: '#FFFFFF', // White
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
  },
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Hero />
      <Features />
      <FeaturedDishes />
      <ReservationForm />
      <Footer />
    </ThemeProvider>
  );
}

export default App;

