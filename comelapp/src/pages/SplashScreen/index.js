import React, {Component} from 'react';
import {Text, SafeAreaView, StatusBar, View} from 'react-native';
import {Logo} from '../../assets';

class SplashScreen extends Component {
  render() {
    return (
      <>
        <View>
          <Logo />
        </View>
      </>
    );
  }
}

export default SplashScreen;
