import React from 'react';
import { AppRegistry,Image, Button, StyleSheet, Text, View, WebView, Platform  } from 'react-native';

const API_KEY = "AIzaSyBNGgztifTRn1GavYmvm-mJtFL59Mkk8qM";

// hard-code for now...figure out search
const VIDEO_URLS = ["https://www.youtube.com/watch?v=nyZk6CGdfhM", "https://www.youtube.com/watch?v=W0OHurGmls8",
"https://www.youtube.com/watch?v=VSKTfPv9SqE", "https://www.youtube.com/watch?v=tT9X-lRxGfc", "https://www.youtube.com/watch?v=Hk1AX8jBOOA", 
"https://www.youtube.com/watch?v=1y0q0YTmjks", "https://www.youtube.com/watch?v=yYwAJrAdUbY", ]

export class Video extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    }
  }

  componentDidMount() {
    const index = Math.floor(Math.random()*VIDEO_URLS.length);
    this.setState({index})
  }

  render() {
    return (
      <View style = {{height: 300}}>
        <WebView
          javaScriptEnabled={true}
          domStorageEnabled={true}
          source={{uri: VIDEO_URLS[this.state.index]}}
        />
      </View>
    );
  }
}
