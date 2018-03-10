import React from 'react';
import { AppRegistry, Image, Button, StyleSheet, Text, View } from 'react-native';

export class Home extends React.Component {
  randomImageGenerator = () => {
    this.props.navigate('Video');
    // this.props.navigate('Video', 'https://www.youtube.com/watch?v=RJa4kG1N3d0')
  }

  render() {
    return (
      <View style={styles.container}>
        <Button 
        onPress={this.randomImageGenerator}
        title="Show me something handsome"
      />
      <Image 
        source={{uri: "https://facebook.github.io/react/logo-og.png"}}
        style={{width: 400, height: 400}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
