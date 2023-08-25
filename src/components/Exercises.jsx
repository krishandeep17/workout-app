import { useState } from "react";
import { Pagination, Grid, Stack, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import { Error, ExerciseCard } from "../components";

export default function Exercises({ exercises, scrollToExercises }) {
  const [currentPage, setCurrentPage] = useState(1);

  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("ms"));
  const isTablet = useMediaQuery(theme.breakpoints.between("ms", "sm"));

  const paginationSize = isMobile ? "small" : isTablet ? "medium" : "large";

  const exercisePerPage = 9;

  const indexOfLastExercise = currentPage * exercisePerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisePerPage;

  const currentPageExercises = exercises?.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );

  const handlePageChange = (e, value) => {
    setCurrentPage(value);

    scrollToExercises();
  };

  return (
    <>
      {exercises?.length > 0 ? (
        <>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            spacing={4}
          >
            {currentPageExercises.map((exercise) => (
              <Grid item md={4} sm={6} key={exercise.id}>
                <ExerciseCard exercise={exercise} />
              </Grid>
            ))}
          </Grid>

          {exercises.length > exercisePerPage && (
            <Stack alignItems="center" mt={8}>
              <Pagination
                count={Math.ceil(exercises.length / exercisePerPage)}
                page={currentPage}
                size={paginationSize}
                color="primary"
                onChange={handlePageChange}
              />
            </Stack>
          )}
        </>
      ) : (
        <Error message="😞 Exercise not found! Search for another exercise." />
      )}
    </>
  );
}
