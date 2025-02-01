import type React from "react"
import { Box, Typography } from "@mui/material"
import breakFast from "../images/break_fast.png"

const Hero: React.FC = () => {
  return (
    <Box
      sx={{
        bgcolor: "primary.main",
        minHeight: "80vh",
        position: "relative",
        overflow: "hidden",
        px: { xs: 2, md: 8 }, // Add horizontal padding
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          minHeight: "80vh",
        }}
      >
        <Box
          sx={{
        flex: 1,
        p: { xs: 4, md: 8 },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
          }}
        >
          <Typography
        component="h1"
        sx={{
          fontSize: { xs: "2.5rem", md: "3.5rem" },
          fontWeight: 700,
          color: "white",
          lineHeight: 1.2,
          mb: 4,
        }}
          >
        Mais de 10 Anos de Tradição e Sabor no Coração de Portugal
          </Typography>
          <Typography
        variant="h6"
        sx={{
          color: "white",
          maxWidth: "600px",
        }}
          >
        Descubra pratos autênticos, preparados com ingredientes frescos e uma pitada de carinho.
          </Typography>
        </Box>

        <Box
          sx={{
        flex: 1,
        position: "relative",
        minHeight: { xs: "300px", md: "auto" },
          }}
        >
          <Box
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          backgroundImage: `url(${breakFast})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
          />
          <Box
        sx={{
          position: "absolute",
          right: 0,
          top: "50%",
          transform: "translateY(-50%)",
          width: "20px",
          height: "100px",
          display: "flex",
          flexDirection: "column",
          gap: 1,
          alignItems: "center",
          bgcolor: "rgba(255,255,255,0.3)",
          borderRadius: "20px",
          p: 1,
          mr: 2,
        }}
          >
        <Box sx={{ width: 8, height: 8, borderRadius: "50%", bgcolor: "white" }} />
        <Box sx={{ width: 8, height: 8, borderRadius: "50%", bgcolor: "rgba(255,255,255,0.5)" }} />
        <Box sx={{ width: 8, height: 8, borderRadius: "50%", bgcolor: "rgba(255,255,255,0.5)" }} />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Hero

