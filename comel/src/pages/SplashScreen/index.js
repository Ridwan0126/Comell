import React, {useEffect} from 'react';
import {View} from 'react-native';
import {Logo} from '../../assets';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('SignIn');
    }, 2000);
  }, []);
  return (
    <>
      <View
        style={{
          backgroundColor: '#ffcc00',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Logo />
      </View>
    </>
  );
};

export default SplashScreen;
