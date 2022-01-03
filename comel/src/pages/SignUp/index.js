import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Header, Gap, Button, TextInput} from '../../components';

const SignUp = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header onBack={() => {}} title="SignUp" subTitle="Register and eat" />
      <View style={styles.container}>
        <View style={styles.foto}>
          <View style={styles.borderFoto}>
            <View style={styles.fotoContainer}>
              <Text style={styles.addFoto}>Add Foto</Text>
            </View>
          </View>
        </View>
        <TextInput label="Full Name" placeholder="Type your Full Name" />
        <Gap height={16} />
        <TextInput
          label="Email Address"
          placeholder="Type your email address"
        />
        <Gap height={16} />
        <TextInput label="Password" placeholder="Type your password" />
        <Gap height={24} />
        <Button
          text="Continue"
          onPress={() => navigation.navigate('SignUpAddress')}
        />
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 26,
    marginTop: 24,
    flex: 1,
  },
  page: {
    flex: 1,
  },
  addFoto: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    color: '#8D92A3',
    textAlign: 'center',
  },
  fotoContainer: {
    padding: 24,
    width: 90,
    height: 90,
    borderRadius: 90,
    backgroundColor: '#F0F0F0',
  },
  borderFoto: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#8D92A3',
    width: 110,
    height: 110,
    borderRadius: 110,
    borderStyle: 'dashed',
  },
  foto: {
    alignItems: 'center',
    marginTop: 26,
    marginBottom: 16,
  },
});
