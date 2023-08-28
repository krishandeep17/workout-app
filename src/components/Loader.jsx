import { Box, Grid, Skeleton, Stack } from "@mui/material";

import { useScreenWidth } from "../hooks";

export default function Loader({ type }) {
  const [isMobile, isTablet] = useScreenWidth();

  const numCards = isMobile ? 1 : isTablet ? 2 : 3;

  if (type === "detail") {
    return (
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        py={4}
      >
        <Grid item md={6} xs={12}>
          <Skeleton
            animation="wave"
            variant="rounded"
            sx={{
              maxWidth: "100%",
              height: "100%",
              width: "450px",
              aspectRatio: "1 / 1",
            }}
          />
        </Grid>
        <Grid item md={6} xs={12}>
          <Skeleton animation="wave" variant="text" sx={{ fontSize: "4rem" }} />
          <Skeleton animation="wave" variant="text" sx={{ fontSize: "1rem" }} />
          <Skeleton
            animation="wave"
            variant="text"
            sx={{ fontSize: "1rem", mb: 2 }}
          />

          <Stack direction="row" alignItems="center" spacing={2} mb={0.4}>
            <Skeleton
              animation="wave"
              variant="circular"
              width={40}
              height={40}
            />
            <Skeleton animation="wave" variant="text" width={150} height={40} />
          </Stack>
          <Stack direction="row" alignItems="center" spacing={2} mb={0.4}>
            <Skeleton
              animation="wave"
              variant="circular"
              width={40}
              height={40}
            />
            <Skeleton animation="wave" variant="text" width={150} height={40} />
          </Stack>
          <Stack direction="row" alignItems="center" spacing={2}>
            <Skeleton
              animation="wave"
              variant="circular"
              width={40}
              height={40}
            />
            <Skeleton animation="wave" variant="text" width={150} height={40} />
          </Stack>
        </Grid>
      </Grid>
    );
  }

  if (type === "exercises") {
    return (
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        spacing={4}
        pt={1}
      >
        {Array.from({ length: 6 }, (_, i) => i + 1).map((num) => (
          <Grid item md={4} sm={6} key={num}>
            <Box>
              <Skeleton
                animation="wave"
                variant="rounded"
                sx={{
                  maxWidth: "100%",
                  height: "100%",
                  width: { ms: "22.5rem", xs: "17.5rem" },
                  aspectRatio: "1 / 1",
                }}
              />

              <Skeleton
                animation="wave"
                variant="text"
                sx={{
                  fontSize: "3rem",
                  maxWidth: "100%",
                  width: { ms: "22.5rem", xs: "17.5rem" },
                }}
              />
            </Box>
          </Grid>
        ))}
      </Grid>
    );
  }

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      spacing={4}
      pt={1}
    >
      {Array.from({ length: numCards }, (_, i) => i + 1).map((num) => (
        <Grid item md={4} sm={6} key={num}>
          {type === "exercise" ? (
            <Box>
              <Skeleton
                animation="wave"
                variant="rounded"
                sx={{
                  maxWidth: "100%",
                  height: "100%",
                  width: { ms: "22.5rem", xs: "17.5rem" },
                  aspectRatio: "1 / 1",
                }}
              />

              <Skeleton
                animation="wave"
                variant="text"
                sx={{
                  fontSize: "3rem",
                  maxWidth: "100%",
                  width: { ms: "22.5rem", xs: "17.5rem" },
                }}
              />
            </Box>
          ) : type === "video" ? (
            <Skeleton
              animation="wave"
              variant="rounded"
              sx={{
                maxWidth: "100%",
                height: "100%",
                width: { sm: "560px", ms: "368px", xs: "285px" },
                aspectRatio: "1.78 / 1",
              }}
            />
          ) : null}
        </Grid>
      ))}
    </Grid>
  );
}
