import React from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import BottomNavbar from "./BottomNavbar";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="manifest" href="/manifest.json" />
        <link
          href="/icons/favicon-16x16.png"
          rel="icon"
          type="image/png"
          sizes="16x16"
        />
        <link
          href="/icons/favicon-32x32.png"
          rel="icon"
          type="image/png"
          sizes="32x32"
        />
        <link rel="apple-touch-icon" href="/icons/icon-152x152.png"></link>
        <meta name="theme-color" content="#111827" />
      </Head>
      <Navbar />
      {children}
      <BottomNavbar />
    </>
  );
};

export default Layout;
