import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container } from "@mui/material";

import { useFetchData } from "../hooks";
import { Error, ExerciseDetails, Loader, Navbar } from "../components";

export default function ExerciseById() {
  const { id } = useParams();

  const { data, isLoading, errorMessage } = useFetchData(
    `https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`,
    "exercisedb.p.rapidapi.com"
  );

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [id]);

  return (
    <Container component="main">
      <Navbar />

      {isLoading ? (
        <Loader type="detail" />
      ) : errorMessage ? (
        <Error message={errorMessage} />
      ) : (
        <ExerciseDetails data={data} />
      )}
    </Container>
  );
}
