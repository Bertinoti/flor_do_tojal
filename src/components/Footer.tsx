import React from 'react';
import { Box, Container, Typography, Link, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer: React.FC = () => {
  return (
    <Box component="footer" sx={{ bgcolor: 'background.paper', py: 6 }}>
      <Container maxWidth="lg">
        <Typography variant="h6" align="center" gutterBottom>
          Flor do Tojal
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Rua Padre Américo, 2660-124 Santo Antão do Tojal, Portugal
        </Typography>
        <Typography
          variant="body2"
          align="center"
          color="text.secondary"
          component="p"
        >
          Telefone: +351 211922816
        </Typography>
        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}>
          <IconButton aria-label="Facebook" color="primary" href='https://www.facebook.com/profile.php?id=61571373445584' target='_blank'>
            <FacebookIcon />
          </IconButton>
          <IconButton aria-label="Instagram" color="primary" href='https://www.instagram.com/flordotojal/' target='_blank'>
            <InstagramIcon />
          </IconButton>
        </Box>
        <Typography variant="body2" color="text.secondary" align="center" sx={{ mt: 2 }}>
          {'Copyright © '}
          <Link color="inherit" href="https://flordotojal.com/">
            Flor do Tojal
          </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;

