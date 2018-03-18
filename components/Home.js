import React from 'react';
import { AppRegistry, Image, Button, StyleSheet, Text, View } from 'react-native';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';

const radio_props = [
  {label: "Photo", value: true},
  {label: "Video", value: false}
];

export class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      typePhoto: true,
    }
  }
  
  contentGenerator = () => {
    if (this.state.typePhoto) {

    }
    else {
      this.props.navigation.navigate('Video');
    }
  }

  setContentType = () => {
    this.setState({typePhoto: !this.state.typePhoto});
  }

  render() {
    return (
      <View style={styles.container}>
          <Button 
          onPress={this.contentGenerator}
          title="Show me something handsome"
        />
         <View style={{display: "flex"}}>
        <RadioForm
          radio_props={radio_props}
          initial={true}
          onPress={this.setContentType}
          />
        </View>
        <Image 
          source={require("../assets/jack.png")}
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
