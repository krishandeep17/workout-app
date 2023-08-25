import { Typography } from "@mui/material";

export default function Heading({ children }) {
  return (
    <Typography component="h4" variant="h4" fontWeight={700} mb={2}>
      {children}
    </Typography>
  );
}
