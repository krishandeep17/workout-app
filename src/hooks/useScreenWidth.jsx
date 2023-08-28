import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function useScreenWidth() {
  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  return [isMobile, isTablet];
}
