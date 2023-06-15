import { createTheme } from "@components/theme"
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import Head from "next/head";
import Navbar from "@components/components/Navbar";
import { GeneralProvider } from "@components/context/GeneralContext";
export default function App({ Component, pageProps }) {
  const theme = createTheme();
  
  return (
    <GeneralProvider>
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <Component {...pageProps} />
    </ThemeProvider>
    </GeneralProvider>
  )
  
}
