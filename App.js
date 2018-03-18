import React from 'react';

import { AppRegistry,Image, Button, Text, StyleSheet, View, WebView, Platform  } from 'react-native';
import { Home } from "./components/Home";
import { Video } from "./components/Video";
import { StackNavigator } from "react-navigation";

const API_KEY = "AIzaSyBNGgztifTRn1GavYmvm-mJtFL59Mkk8qM";

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

