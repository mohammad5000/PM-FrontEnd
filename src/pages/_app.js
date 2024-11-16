import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import { AppCacheProvider } from '@mui/material-nextjs/v14-pagesRouter';

export default function App({ Component, pageProps }) {

  return (
    <AppCacheProvider {...pageProps}>
     
      <Component {...pageProps} />
      
    </AppCacheProvider>
  );
  // const getLayout = Component.getLayout || ((page) => page);
  // return getLayout(<Component {...pageProps} />);
}
