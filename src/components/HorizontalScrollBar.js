import { Box } from "@mui/material";
import React from "react";
import { ScrollMenu } from "react-horizontal-scrolling-menu";

import BodyPart from "./BodyPart";
import ExerciseCard from "./ExerciseCard";

const HorizontalScrollBar = ({ data, bodyPart, setBodyPart, isBodyPart }) => {
  return (
    <ScrollMenu>
      {data.map((item) => (
        <Box key={item.id || item} title={item.name || item} m="0 40px">
          {isBodyPart ? (
            <BodyPart
              item={item}
              bodyPart={bodyPart}
              setBodyPart={setBodyPart}
            />
          ) : (
            <ExerciseCard exercise={item} />
          )}
        </Box>
      ))}
    </ScrollMenu>
  );
};

export default HorizontalScrollBar;
