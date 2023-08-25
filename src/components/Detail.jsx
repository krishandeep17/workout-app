import { Avatar, Box, Stack, Typography, Grid } from "@mui/material";
import AdjustIcon from "@mui/icons-material/Adjust";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import SelfImprovementIcon from "@mui/icons-material/SelfImprovement";

export default function Detail({ data }) {
  const { bodyPart, equipment, gifUrl, name, target } = data;

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      rowGap={2}
      pb={4}
    >
      <Grid item md={6}>
        <Box component="img" src={gifUrl} alt={name} maxWidth="100%" />
      </Grid>
      <Grid item md={6}>
        <Box>
          <Typography
            variant="h3"
            component="h3"
            color="#222"
            fontWeight="700"
            textTransform="capitalize"
            gutterBottom
          >
            {name}
          </Typography>
          <Typography component="p">
            Exercise keep you strong. {name} {` `} is one of the best exercises
            to target your {target}. It will help you improve your mood and gain
            energy.
          </Typography>
          <Box mt={3}>
            <Stack direction="row" alignItems="center" spacing={2} mb={2}>
              <Avatar sx={{ bgcolor: "primary.main" }}>
                <SelfImprovementIcon />
              </Avatar>
              <Typography component="p" textTransform="capitalize">
                {bodyPart}
              </Typography>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={2} mb={2}>
              <Avatar sx={{ bgcolor: "primary.main" }}>
                <FitnessCenterIcon />
              </Avatar>
              <Typography component="p" textTransform="capitalize">
                {equipment}
              </Typography>
            </Stack>
            <Stack direction="row" alignItems="center" spacing={2} mb={2}>
              <Avatar sx={{ bgcolor: "primary.main" }}>
                <AdjustIcon />
              </Avatar>
              <Typography component="p" textTransform="capitalize">
                {target}
              </Typography>
            </Stack>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
