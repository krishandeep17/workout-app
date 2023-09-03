import { Box, Grid, Link, Stack, Typography } from "@mui/material";

import { useFetchData } from "../hooks";
import { Error, Heading, Loader } from "../components";

export default function ExerciseVideos({ name }) {
  const { data, isLoading, errorMessage } = useFetchData(
    `https://youtube-search-and-download.p.rapidapi.com/search?query=${name}`,
    "youtube-search-and-download.p.rapidapi.com"
  );

  return (
    <Box sx={{ py: 4 }}>
      <Heading>
        Watch{" "}
        <Box
          component="span"
          textTransform="capitalize"
          sx={{ color: "primary.main" }}
        >
          {name}
        </Box>{" "}
        exercise videos
      </Heading>
      {isLoading ? (
        <Loader type="video" />
      ) : errorMessage ? (
        <Error message={errorMessage} />
      ) : (
        <Grid container spacing={4} pt={2}>
          {data?.contents?.slice(0, 3).map((content) => (
            <Grid item md={4} sm={6} key={content.video.videoId}>
              <Stack>
                <Link
                  href={`https://www.youtube.com/watch?v=${content.video.videoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  underline="none"
                  color="inherit"
                >
                  <Box
                    component="img"
                    className="thumbnail"
                    src={content.video.thumbnails[0].url}
                    alt={content.video.title}
                    maxWidth="100%"
                    width={700}
                    sx={{
                      aspectRatio: "1.78 / 1",
                      objectFit: "cover",
                    }}
                  />

                  <Typography component="h6" variant="h6" fontWeight={500}>
                    {content.video.title}
                  </Typography>
                </Link>
              </Stack>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
}
