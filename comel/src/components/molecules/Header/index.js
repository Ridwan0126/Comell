import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {IcBack} from '../../../assets';

const Header = ({title, subTitle, onBack}) => {
  return (
    <View style={styles.container}>
      {onBack && (
        <TouchableOpacity>
          <View style={styles.back}>
            <IcBack />
          </View>
        </TouchableOpacity>
      )}
      <View>
        <Text style={styles.tittle}>{title}</Text>
        <Text style={styles.subTittle}>{subTitle}</Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  tittle: {
    fontSize: 22,
    fontFamily: 'Poppins-Medium',
    color: '#020202',
  },
  subTittle: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    color: '#8D92A3',
  },
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingTop: 30,
    paddingBottom: 24,
    flexDirection: 'row',
    alignItems: 'center',
  },
  back: {
    padding: 16,
    marginRight: 16,
    marginLeft: -16,
  },
});
