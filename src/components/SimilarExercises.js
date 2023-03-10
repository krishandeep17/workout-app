import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import HorizontalScrollBar from "./HorizontalScrollBar";
import Loader from "./Loader";

const SimilarExercises = ({ exerciseTargetMuscle, exerciseEquipment }) => {
  return (
    <Box
      sx={{
        mt: { lg: "100px", xs: "0" },
      }}
    >
      <Typography variant="h3" mb={5}>
        Exercises that target the same muscle group
      </Typography>
      <Stack direction="row" sx={{ p: "2", position: "relative" }}>
        {exerciseTargetMuscle.length ? (
          <HorizontalScrollBar data={exerciseTargetMuscle} />
        ) : (
          <Loader />
        )}
      </Stack>
      <Typography variant="h3" mb={5}>
        Exercises that uses the same equipment
      </Typography>
      <Stack direction="row" sx={{ p: "2", position: "relative" }}>
        {exerciseEquipment.length ? (
          <HorizontalScrollBar data={exerciseEquipment} />
        ) : (
          <Loader />
        )}
      </Stack>
    </Box>
  );
};

export default SimilarExercises;
