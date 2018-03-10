import React from 'react';

import { AppRegistry,Image, Button, StyleSheet, Text, View } from 'react-native';
import { Home } from "./components/Home";
import { Video } from "./components/Video";
import { StackNavigator } from "react-navigation";

export default class App extends React.Component {
  render() {
    return (
      <SimpleNavigation />
    );
  }
}

export const SimpleNavigation = StackNavigator({
  Home: {
    screen: Home
  },
  Video: {
    screen: Video
  }
});

