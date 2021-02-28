import Document, { Head, Html, Main, NextScript } from 'next/document';

/* Tudo que é carregado uma ÚNICA vez pela aplicação pode ser 
colocado colocado aqui por uma questão de performance já que esse
arquivo é "lido" uma ÚNICA vez*/
export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="shortcut icon" href="favicon.png" type="image/png" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}