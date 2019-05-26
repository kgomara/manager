import React, { Component } from "react";
import { View, Text } from "react-native";
import { Provider } from "react-redux";
import { createStore } from "redux";
import firebase from "firebase";

import reducers from "./reducers";
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
    return (
      <Provider store={createStore(reducers)}>
        <View>
          <Text>Hello!</Text>
        </View>
      </Provider>
    );
  }
}

export default App;
