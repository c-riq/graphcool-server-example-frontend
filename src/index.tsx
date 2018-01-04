import * as React from "react";
import { ApolloProvider } from "react-apollo";
import { render } from "react-dom";
import { client } from "./utils/makeClinet";
import registerServiceWorker from "./registerServiceWorker";

import App from "./App";
import "./index.css";

const WrappedApp = (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

render(WrappedApp, document.getElementById("root"));
registerServiceWorker();
