import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Header, Gap, Button, TextInput, Select} from '../../components';

const SignUpAddess = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header onBack={() => {}} title="Address" subTitle="Make sure is valid" />
      <View style={styles.container}>
        <TextInput label="Phone number" placeholder="Type your Phone number" />
        <Gap height={16} />
        <TextInput label="Address" placeholder="Type your address" />
        <Gap height={16} />
        <TextInput label="House number" placeholder="Type your password" />
        <Gap height={16} />
        <Select label="City" />
        <Gap height={24} />
        <Button
          text="Sign Up now"
          onPress={() => navigation.replace('SuccessSignUp')}
        />
      </View>
    </View>
  );
};

export default SignUpAddess;

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
});
