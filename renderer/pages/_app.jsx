import React from "react";


import "../styles/globals.css";
import NavigationContainer from "../components/nav/NavigationContainer";
import ContextWrapper from "../context/ContextProvider";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <ContextWrapper>
        <NavigationContainer>
          <Component {...pageProps} />
        </NavigationContainer>
      </ContextWrapper>
    </>
  );
}

export default MyApp;
