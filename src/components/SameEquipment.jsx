import { Box } from "@mui/material";

import { useFetchData } from "../hooks";
import { Error, Heading, Loader, SwiperCarousel } from "../components";

export default function SameEquipment({ equipment }) {
  const { data, isLoading, errorMessage } = useFetchData(
    `https://exercisedb.p.rapidapi.com/exercises/equipment/${equipment}`,
    "exercisedb.p.rapidapi.com"
  );

  return (
    <Box sx={{ py: 4 }}>
      <Heading>Exercises that uses the same equipment</Heading>

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
