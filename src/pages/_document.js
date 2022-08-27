// pages/_document.js
import React from "react";
import { Html, Head, Main, NextScript } from 'next/document'
import { AppContext } from '../context/AppContext'

export default function Document() {

  const {darkMode} = React.useContext(AppContext);

  return (
    <Html>
      <Head>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
