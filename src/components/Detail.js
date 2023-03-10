import React from "react";
import { Button, Stack, Typography } from "@mui/material";

import BodyPartImage from "../assets/icons/body-part.png";
import EquipmentImage from "../assets/icons/equipment.png";
import TargetImage from "../assets/icons/target.png";

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, equipment, gifUrl, name, target } = exerciseDetail;

  const extraDetail = [
    {
      icon: BodyPartImage,
      name: bodyPart,
    },
    {
      icon: EquipmentImage,
      name: equipment,
    },
    {
      icon: TargetImage,
      name: target,
    },
  ];

  return (
    <Stack
      gap="60px"
      sx={{
        flexDirection: { lg: "row" },
        alignItems: "center",
        p: "20px",
      }}
    >
      <img src={gifUrl} alt={name} loading="lazy" className="detail-image" />
      <Stack
        sx={{
          gap: { lg: "35px", xs: "20px" },
        }}
      >
        <Typography variant="h3" textTransform="capitalize">
          {name}
        </Typography>
        <Typography variant="h6">
          Exercise keep you strong. {name} {` `} is one of the best exercises to
          target your {target}. It will help you improve your mood and gain
          energy.
        </Typography>
        {extraDetail.map((item, index) => (
          <Stack key={index} direction="row" gap="24px" alignItems="center">
            <Button
              sx={{
                background: "#fff2db",
                borderRadius: "50%",
                cursor: "default",
                height: "100px",
                width: "100px",
              }}
            >
              <img
                src={item.icon}
                alt={item.name}
                style={{ height: "50px", width: "50px" }}
              />
            </Button>
            <Typography textTransform="capitalize" variant="h5">
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Detail;
