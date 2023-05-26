import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => {
  const debugScreen = `${process.env.NODE_ENV === 'development' ? 'debug-screens' : ''}`;
  return (
    <Html lang="en">
      <Head />
      <body className={debugScreen}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
