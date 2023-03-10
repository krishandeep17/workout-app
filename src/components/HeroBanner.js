import React from "react";
import { Box, Button, Typography } from "@mui/material";
import HeroBannerImage from "../assets/images/banner.png";

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "212px", sm: "70px" },
        ml: { sm: "50px" },
      }}
      position="relative"
      p="20px"
    >
      <Typography color="#ff2625" fontWeight={600} fontSize="26px">
        Fitness Club
      </Typography>
      <Typography
        fontWeight={700}
        mt="30px"
        mb="23px"
        sx={{
          fontSize: { lg: "44px", sm: "40px" },
        }}
      >
        Sweet, Smile <br /> and Repeat
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={4}>
        Checkout the most effective exercises
      </Typography>
      <Button
        href="#exercises"
        variant="contained"
        sx={{
          backgroundColor: "#ff2625",
          padding: "10px",
        }}
      >
        Exprore Exercises
      </Button>
      <Typography
        color="#ff2625"
        fontWeight={600}
        fontSize="200px"
        sx={{
          opacity: "0.1",
          display: { lg: "block", xs: "none" },
          userSelect: "none",
        }}
      >
        Exercise
      </Typography>
      <img src={HeroBannerImage} alt="Banner" className="hero-banner-img" />
    </Box>
  );
};

export default HeroBanner;
