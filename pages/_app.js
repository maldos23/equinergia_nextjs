import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

function Home(props) {
  const { Component, pageProps } = props;

  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#2F97F2",
      },
    },
    typography: {
      useNextVariants: true,
      fontFamily: ["Montserrat"].join(","),
    },
  })
  return (
    <Fragment>
      <Head>
        <title>Equinergia Logistica</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider
        theme={theme}
      >
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </Fragment>
  );
}

Home.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default Home;
