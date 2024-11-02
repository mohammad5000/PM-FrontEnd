import {
  DocumentHeadTags,
  documentGetInitialProps,
} from '@mui/material-nextjs/v14-pagesRouter';


import { Html, Head, Main, NextScript } from "next/document";

export default function Document(props) {
return (
  <Html lang="en">
    <Head>
    <DocumentHeadTags {...props} />
    </Head >
    <body className="antialiased">
      <Main />
      <NextScript />
    </body>
  </Html>
);
}

Document.getInitialProps = async (ctx) => {
 const finalProps = await documentGetInitialProps(ctx);
  return finalProps;
};