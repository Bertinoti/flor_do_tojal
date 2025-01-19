import React from 'react';
import { Grid, Typography, Container, Card, CardContent, CardMedia } from '@mui/material';

interface Dish {
  title: string;
  image: string;
}

const dishes: Dish[] = [
  { title: 'Grelhados na brasa', image: '/placeholder.svg?height=200&width=300' },
  { title: 'Frango de churrasco', image: '/placeholder.svg?height=200&width=300' },
  { title: 'Espetadas', image: '/placeholder.svg?height=200&width=300' },
  { title: 'Bitoque', image: '/placeholder.svg?height=200&width=300' },
];

const FeaturedDishes: React.FC = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Pratos em Destaque
      </Typography>
      <Grid container spacing={4}>
        {dishes.map((dish, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                component="img"
                height="200"
                image={dish.image}
                alt={dish.title}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h6" component="div">
                  {dish.title}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default FeaturedDishes;

