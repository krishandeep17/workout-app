import { Box } from "@mui/material";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Detail from "../components/Detail";
import ExerciseVideos from "../components/ExerciseVideos";
import SimilarExercises from "../components/SimilarExercises";

import {
  url,
  options,
  fetchData,
  youtubeOptions,
  youtubeSearchUrl,
} from "../utils/fetchData";

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseTargetMuscle, setExerciseTargetMuscle] = useState([]);
  const [exerciseEquipment, setExerciseEquipment] = useState([]);
  const [exerciseVideos, setExerciseVideos] = useState([]);

  const { id } = useParams();

  useState(() => {
    const fetchExercisesData = async () => {
      const exerciseDetailData = await fetchData(
        `${url}/exercise/${id}`,
        options
      );
      setExerciseDetail(exerciseDetailData);

      const exerciseTargetMuscleData = await fetchData(
        `${url}/target/${exerciseDetailData.target}`,
        options
      );
      setExerciseTargetMuscle(exerciseTargetMuscleData);

      const exerciseEquipmentData = await fetchData(
        `${url}/equipment/${exerciseDetailData.equipment}`,
        options
      );
      setExerciseEquipment(exerciseEquipmentData);

      const exerciseVideoData = await fetchData(
        `${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`,
        youtubeOptions
      );
      setExerciseVideos(exerciseVideoData.contents);
    };

    fetchExercisesData();
  }, [id]);

  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos
        exerciseVideos={exerciseVideos}
        name={exerciseDetail.name}
      />
      <SimilarExercises
        exerciseTargetMuscle={exerciseTargetMuscle}
        exerciseEquipment={exerciseEquipment}
      />
    </Box>
  );
};

export default ExerciseDetail;
