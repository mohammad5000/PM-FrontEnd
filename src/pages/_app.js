import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import GlobalTheme from "@/utilites/Theme";
import { ThemeProvider } from "@mui/material";
import { AppCacheProvider } from '@mui/material-nextjs/v14-pagesRouter';

export default function App({ Component, pageProps }) {

  return (
    <AppCacheProvider {...pageProps}>
     <ThemeProvider theme={GlobalTheme}>
      <Component {...pageProps} />
      </ThemeProvider>
    </AppCacheProvider>
  );
  // const getLayout = Component.getLayout || ((page) => page);
  // return getLayout(<Component {...pageProps} />);
}
