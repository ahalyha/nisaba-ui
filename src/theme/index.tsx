import { CacheProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import {
  ThemeProvider as MUIThemeProvider,
  type ThemeOptions,
  createTheme,
} from "@mui/material/styles";

import palette from "./palette";
import GlobalStyles from "./globalStyles";

import createEmotionCache from "./createEmotionCache";

const clientSideEmotionCache = createEmotionCache();

function ThemeProvider({ children }: any) {
  const theme: ThemeOptions = createTheme({
    palette,
  });

  return (
    <MUIThemeProvider theme={theme}>
      <CacheProvider value={clientSideEmotionCache}>
        <CssBaseline />
        <GlobalStyles />
        {children}
      </CacheProvider>
    </MUIThemeProvider>
  );
}

export default ThemeProvider;
