import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import reportWebVitals from "./reportWebVitals";
import App from "./containers/App";
import { ChakraProvider } from "@chakra-ui/react";
import ShowStore from "./models/ShowStore";
import { Provider } from "mobx-react";
import { ParamsStore } from './models/ParamsStore';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <ChakraProvider>
    <Provider ShowStore={ShowStore} ParamsStore={ParamsStore}>
      <App />
    </Provider>
  </ChakraProvider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
