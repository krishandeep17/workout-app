import {
  Detail,
  ExerciseVideos,
  SameEquipment,
  SimilarExercises,
} from "../components";

export default function ExerciseDetails({ data }) {
  const { equipment, name, target } = data;

  return (
    <>
      <Detail data={data} />
      <ExerciseVideos name={name} />
      <SimilarExercises target={target} />
      <SameEquipment equipment={equipment} />
    </>
  );
}
