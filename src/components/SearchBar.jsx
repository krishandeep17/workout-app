import { useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import { grey } from "@mui/material/colors";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

export default function SearchBar({ data, setExercises }) {
  const [search, setSearch] = useState("");

  const handleExerciseSearch = (e) => {
    e.preventDefault();

    if (!search) return;

    const searchedExercises = data.filter(
      (exercise) =>
        exercise.name.toLowerCase().includes(search) ||
        exercise.target.toLowerCase().includes(search) ||
        exercise.equipment.toLowerCase().includes(search) ||
        exercise.bodyPart.toLowerCase().includes(search)
    );

    setExercises(searchedExercises);
    setSearch("");
  };

  return (
    <Box
      component="form"
      noValidate
      autoComplete="off"
      sx={{
        maxWidth: "700px",
        mx: "auto",
        py: { lg: 6, md: 5, xs: 4 },
      }}
      onSubmit={handleExerciseSearch}
    >
      <Box position="relative">
        <Box
          component="label"
          htmlFor="search"
          sx={{
            position: "absolute",
            top: "50%",
            left: 10,
            transform: "translateY(-50%)",
            color: grey[500],
          }}
        >
          <SearchRoundedIcon sx={{ display: "flex" }} />
        </Box>

        <TextField
          variant="outlined"
          fullWidth
          id="search"
          placeholder="Search Exercises"
          sx={{
            "& .css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
              pr: 15,
              pl: 5.5,
            },
            "& .css-1d3z3hw-MuiOutlinedInput-notchedOutline": {
              borderWidth: 2,
            },
          }}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button
          variant="contained"
          size="large"
          type="submit"
          sx={{
            position: "absolute",
            right: "0",
            top: "0",
            bottom: "0",
            boxShadow: "none",
          }}
        >
          Search
        </Button>
      </Box>
    </Box>
  );
}
