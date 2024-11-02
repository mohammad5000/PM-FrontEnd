import "@/styles/globals.css";
import { AppCacheProvider } from '@mui/material-nextjs/v14-pagesRouter';

export default function App({ Component, pageProps }) {

  return (
    <AppCacheProvider {...pageProps}>
    <Component {...pageProps} />
    </AppCacheProvider>
  );
}
