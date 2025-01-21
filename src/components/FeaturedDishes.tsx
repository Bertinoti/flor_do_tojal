import type React from "react"
import { Box, Typography, Container, Grid } from "@mui/material"
import kebabs from '../images/vecteezy_satay-png-with-ai-generated_26773552.png';
import barbecueChicken from '../images/vecteezy_grilled-chicken-legs-on-a-barbecue-grill-with-flames-in-the_33113285.png';
import barbecueSteak from '../images/vecteezy_gourmet-fresh-delicious-grill-on-the-grill-with-flames_14214639.png';
import bitoque from '../images/vecteezy_rice-beans-french-fries-and-meat-generative-ai_32419356.png';




interface Dish {
  title: string
  image: string
}

const dishes: Dish[] = [
  {
    title: "Grelhados na brasa",
    image: barbecueSteak,
  },
  {
    title: "Frango de churrasco",
    image: barbecueChicken,
  },
  {
    title: "Espetadas",
    image: kebabs,
  },
  {
    title: "Bitoque",
    image: bitoque,
  },
]

const FeaturedDishes: React.FC = () => {
  return (
    <Box
      sx={{
        py: 8,
        px: { xs: 2, md: 8 },
        bgcolor: "rgba(255, 215, 0, 0.1)", // Same as Features cards
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(128, 128, 128, 0.05)", // Light grey overlay
          backgroundImage: "none", // Remove the pattern
        },
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ mb: 6 }}>
          <Typography
            variant="h4"
            sx={{
              color: "#FFD700",
              fontWeight: "bold",
              mb: 2,
            }}
          >
            PRATOS EM DESTAQUE
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "rgba(0,0,0,0.7)", // Darker text for better readability
              maxWidth: "600px",
            }}
          >
            Descubra os sabores únicos da Flor do Tojal, com experiências superiores e cheias de qualidade. Preparamos
            com ingredientes frescos e na perfeição, nossos pratos são a escolha ideal para qualquer ocasião.
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {dishes.map((dish, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <Box
                sx={{
                  position: "relative",
                  height: 240,
                  borderRadius: "16px",
                  overflow: "hidden",
                  "&:hover": {
                    "& .dish-overlay": {
                      opacity: 1,
                    },
                  },
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundImage: `url(${dish.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <Box
                  className="dish-overlay"
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    bgcolor: "rgba(0,0,0,0.1)",
                    display: "flex",
                    alignItems: "flex-end",
                    padding: 3,
                    transition: "opacity 0.3s ease",
                    opacity: 0.8,
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      color: "white",
                      fontWeight: "bold",
                    }}
                  >
                    {dish.title}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default FeaturedDishes

