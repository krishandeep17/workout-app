import { Link } from "react-router-dom";
import { indigo, teal } from "@mui/material/colors";
import {
  Chip,
  Stack,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";

export default function ExerciseCard({ exercise }) {
  const { bodyPart, gifUrl, id, name, target } = exercise;

  return (
    <Link to={`/exercise/${id}`} className="link">
      <Card>
        <CardActionArea>
          <CardMedia component="img" image={gifUrl} alt={name} />
          <CardContent sx={{ textTransform: "capitalize", pt: 0, pb: 4 }}>
            <Typography
              variant="h6"
              component="h6"
              fontWeight="bold"
              textAlign="center"
              sx={{
                mb: 1.3,
              }}
            >
              {name}
            </Typography>
            <Stack
              direction="row"
              spacing={2}
              justifyContent="center"
              sx={{ width: "100%" }}
            >
              <Chip
                label={bodyPart}
                variant="filled"
                color="info"
                sx={{
                  bgcolor: teal[500],
                }}
              />
              <Chip
                label={target}
                variant="filled"
                color="info"
                sx={{
                  bgcolor: indigo[500],
                }}
              />
            </Stack>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
}
