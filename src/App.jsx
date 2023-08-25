import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

import theme from "./theme";
import { ExerciseById, HomePage } from "./pages";
import { Footer } from "./components";

export default function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/exercise/:id" element={<ExerciseById />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
  );
}
