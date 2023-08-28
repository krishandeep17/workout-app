import { useEffect, useRef, useState } from "react";
import { Box, Container } from "@mui/material";

import { useFetchData } from "../hooks";
import {
  Error,
  Exercises,
  HeroSection,
  Loader,
  Navbar,
  SearchBar,
} from "../components";

export default function Home() {
  const { data, isLoading, errorMessage } = useFetchData(
    "https://exercisedb.p.rapidapi.com/exercises",
    "exercisedb.p.rapidapi.com"
  );

  const [exercises, setExercises] = useState([]);
  const exercisesRef = useRef(null);

  useEffect(() => {
    if (data) {
      setExercises(data);
    }
  }, [data]);

  const scrollToExercises = () =>
    exercisesRef.current.scrollIntoView({ behavior: "smooth" });

  return (
    <>
      <Box className="homepage">
        <Container component="header">
          <Navbar />
          <HeroSection scrollToExercises={scrollToExercises} />
        </Container>
      </Box>
      <Container component="main" ref={exercisesRef}>
        <SearchBar data={data} setExercises={setExercises} />

        {isLoading ? (
          <Loader type="exercise" />
        ) : errorMessage ? (
          <Error message={errorMessage} />
        ) : (
          <Exercises
            exercises={exercises}
            scrollToExercises={scrollToExercises}
          />
        )}
      </Container>
    </>
  );
}
