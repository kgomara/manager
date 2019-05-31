import React, { Component } from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import firebase from "firebase";
import ReduxThunk from "redux-thunk";

import reducers from "./reducers";
import LoginForm from "./components/LoginForm";
import Router from "./Router";

/*
I use GitHub, which hackers harvest for private keys, etc. The following secrets are
in a confg.js file, which is excluded by my .gitignore, thus hackers can't get it.  I 
manage this (and similar files) by proprietary means.
 */
import {
  apiKey,
  authDomain,
  databaseURL,
  storageBucket,
  messageSenderId
} from "../src/config";

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: apiKey,
      authDomain: authDomain,
      databaseURL: databaseURL,
      storageBucket: storageBucket,
      messageSenderId: messageSenderId
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
