import { Box, Button, Grid, Link, Typography } from "@mui/material";

import WorkoutHeroImage from "../assets/workout-hero-image.png";

export default function HeroSection({ scrollToExercises }) {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      rowGap={5}
      py={{ xs: 3, sm: 6, md: 0 }}
      sx={{
        minHeight: "calc(100vh - 5.5rem)",
      }}
    >
      <Grid item md={6}>
        <Box>
          <Typography
            variant="h2"
            component="h1"
            color="#222"
            fontWeight="700"
            textTransform="capitalize"
            gutterBottom
          >
            Come and make your body shape with{" "}
            <Box component="span" sx={{ color: "primary.main" }}>
              WorkoutPal
            </Box>
          </Typography>
          <Typography component="p" mb={3}>
            Discover the perfect exercises for your goals. From muscle-targeted
            workouts to equipment-based exercises, we've got you covered.
          </Typography>

          <Button variant="contained" size="large" onClick={scrollToExercises}>
            Get Started
          </Button>
        </Box>
      </Grid>
      <Grid item md={6}>
        <Box
          component="img"
          src={WorkoutHeroImage}
          alt="Workout Hero Image"
          maxWidth="100%"
        />
      </Grid>
    </Grid>
  );
}
