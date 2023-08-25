import { Box, Container, Link, Stack } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function Footer() {
  return (
    <Container component="footer" sx={{ my: 7 }}>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        spacing={0.5}
        component="p"
        fontWeight={500}
      >
        <Box component="span">Coded with</Box>
        <FavoriteIcon fontSize="small" sx={{ color: "primary.main" }} />
        <Box component="span">by</Box>
        <Link
          href="https://github.com/krishandeep17"
          target="_blank"
          rel="noopener noreferrer"
          underline="hover"
        >
          Krishandeep
        </Link>
      </Stack>
    </Container>
  );
}
