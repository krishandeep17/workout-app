import { Box } from "@mui/material";

import { useFetchData } from "../hooks";
import { Error, Heading, Loader, SwiperCarousel } from "../components";

export default function SimilarExercises({ target }) {
  const { data, isLoading, errorMessage } = useFetchData(
    `https://exercisedb.p.rapidapi.com/exercises/target/${target}`,
    "exercisedb.p.rapidapi.com"
  );

  return (
    <Box sx={{ py: 4 }}>
      <Heading>Exercises that target the same muscle group</Heading>

      {isLoading ? (
        <Loader type="video" />
      ) : errorMessage ? (
        <Error message={errorMessage} />
      ) : (
        <SwiperCarousel data={data} />
      )}
    </Box>
  );
}
