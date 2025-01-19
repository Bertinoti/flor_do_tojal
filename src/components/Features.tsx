import React from 'react';
import { Grid, Typography, Container, Paper } from '@mui/material';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import EmojiFoodBeverageIcon from '@mui/icons-material/EmojiFoodBeverage';
import SpeedIcon from '@mui/icons-material/Speed';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

interface Feature {
  title: string;
  icon: React.ReactNode;
}

const features: Feature[] = [
  { title: 'Receitas tradicionais portuguesas', icon: <RestaurantMenuIcon /> },
  { title: 'Ingredientes de qualidade', icon: <EmojiFoodBeverageIcon /> },
  { title: 'Serviço rápido e amigável', icon: <SpeedIcon /> },
  { title: 'Preços acessíveis', icon: <AttachMoneyIcon /> },
  { title: 'Promoções semanais', icon: <LocalOfferIcon /> },
];

const Features: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        O que oferecemos
      </Typography>
      <Grid container spacing={4}>
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper elevation={3} sx={{ p: 2, textAlign: 'center', height: '100%' }}>
              {feature.icon}
              <Typography variant="h6" sx={{ mt: 2 }}>
                {feature.title}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Features;

