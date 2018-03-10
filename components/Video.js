import React from 'react';
import { Image, Button, StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-gesture-handler';

export class Video extends React.Component {
  render() {
    return (
      <WebView
            style={styles.frame}
            url={this.props.url}
            renderLoading={this.renderLoading}
            renderError={this.renderError}
            automaticallyAdjustContentInsets={false}
        />
    );
  }
}
