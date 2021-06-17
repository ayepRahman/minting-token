import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ChakraProvider } from "@chakra-ui/react";
import { ThemeProvider } from "@emotion/react";
import { BrowserRouter } from "react-router-dom";
import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import { theme } from "styles";
import store from "redux/store";
import App from "containers/App";
import reportWebVitals from "./reportWebVitals";

const getLibrary = (provider: any, connector: any): Web3Provider => {
  const library = new Web3Provider(provider);
  library.pollingInterval = 12000;
  return library;
};

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <BrowserRouter>
            <Web3ReactProvider getLibrary={getLibrary}>
              <App />
            </Web3ReactProvider>
          </BrowserRouter>
        </Provider>
      </ThemeProvider>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
