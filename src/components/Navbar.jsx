import { Link } from "react-router-dom";
import { Box, Stack } from "@mui/material";

import logo from "../assets/logo.svg";

export default function Navbar() {
  return (
    <Box component="nav" pt={3}>
      <Link to="/" className="link">
        <Stack direction="row" alignItems="center" spacing={1.5}>
          <Box
            component="img"
            src={logo}
            alt="Logo"
            maxWidth="100%"
            width={40}
            sx={{ aspectRatio: "1 / 1" }}
          />

          <Box component="h2" variant="h2">
            Workout
            <Box component="span" sx={{ color: "primary.main" }}>
              Pal
            </Box>
          </Box>
        </Stack>
      </Link>
    </Box>
  );
}
