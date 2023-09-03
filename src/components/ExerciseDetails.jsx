import { useEffect } from "react";
import {
  Detail,
  ExerciseVideos,
  SameEquipment,
  SimilarExercises,
} from "../components";

export default function ExerciseDetails({ data }) {
  const { equipment, name, target } = data;

  // Change website title with the exercise name
  useEffect(() => {
    if (!name) return;

    document.title = `Workout Pal | ${name.toUpperCase()}`;

    return () => {
      document.title = `Workout Pal`;
    };
  }, [name]);

  return (
    <>
      <Detail data={data} />
      <ExerciseVideos name={name} />
      <SimilarExercises target={target} />
      <SameEquipment equipment={equipment} />
    </>
  );
}
