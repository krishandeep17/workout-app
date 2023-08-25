import { Box, Stack } from "@mui/material";

import errorImage from "../assets/error-image.svg";

export default function Error({ message }) {
  return (
    <Stack direction="column" alignItems="center" justifyContent="center">
      <Box component="h2">{message}</Box>
      <Box
        component="img"
        src={errorImage}
        alt="Error Image"
        maxWidth="100%"
        width={900}
      />
    </Stack>
  );
}
