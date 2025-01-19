import React from 'react';
import { Box, Typography, Container, Button } from '@mui/material';

const Hero: React.FC = () => {
  return (
    <Box
      sx={{
        bgcolor: 'primary.main',
        pt: 8,
        pb: 6,
      }}
    >
      <Container maxWidth="sm">
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Flor do Tojal
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" paragraph>
          Mais de 10 Anos de Tradição e Sabor no Coração de Portugal
        </Typography>
        <Typography variant="body1" align="center" color="text.secondary" paragraph>
          Descubra pratos autênticos feitos com ingredientes frescos
        </Typography>
        <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
          <Button variant="contained" color="secondary" sx={{ mr: 2 }}>
            Ver Menu
          </Button>
          <Button variant="outlined" color="secondary">
            Fazer Reserva
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default Hero;

