import type React from "react"
import { Box, Typography, Container, Grid } from "@mui/material"
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu"
import EmojiFoodBeverageIcon from "@mui/icons-material/EmojiFoodBeverage"
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt"
import AttachMoneyIcon from "@mui/icons-material/AttachMoney"
import LocalOfferIcon from "@mui/icons-material/LocalOffer"

interface Feature {
  title: string
  icon: React.ReactNode
}

const features: Feature[] = [
  {
    title: "RECEITAS TRADICIONAIS PORTUGUESAS",
    icon: <RestaurantMenuIcon />,
  },
  {
    title: "INGREDIENTES DE QUALIDADE",
    icon: <EmojiFoodBeverageIcon />,
  },
  {
    title: "SERVIÇO RÁPIDO E AMIGÁVEL",
    icon: <SentimentSatisfiedAltIcon />,
  },
  {
    title: "PREÇOS ACESSÍVEIS",
    icon: <AttachMoneyIcon />,
  },
  {
    title: "PROMOÇÕES SEMANAIS",
    icon: <LocalOfferIcon />,
  },
]

const Features: React.FC = () => {
  return (
    <Box sx={{ py: 8, bgcolor: "white" }}>
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          align="center"
          gutterBottom
          sx={{
            color: "#FFD700",
            fontWeight: "bold",
            mb: 6,
          }}
        >
          O QUE OFERECEMOS
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={2.4} key={index}>
              <Box
                sx={{
                  position: "relative",
                  bgcolor: "rgba(255, 215, 0, 0.1)",
                  borderRadius: "20px",
                  height: "200px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  pt: 6,
                  px: 2,
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    bgcolor: "primary.main",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 1,
                  },
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    zIndex: 2,
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "60px",
                    height: "60px",
                  }}
                >
                  {feature.icon}
                </Box>
                <Typography
                  variant="subtitle2"
                  align="center"
                  sx={{
                    fontWeight: "bold",
                    fontSize: "0.875rem",
                    maxWidth: "160px",
                    color: "#333",
                  }}
                >
                  {feature.title}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default Features

