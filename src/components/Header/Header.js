import React, {useState} from 'react';
import {
  Image,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import R from '../../assets/R';
import {
  getFontXD,
  getWidth,
  HEIGHTXD,
  WIDTHXD,
  WIDTHXDICON,
} from '../../config/Functions';
import Icon from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SnackBar from '../SnackBar';
const Header = props => {
  const {title, isBack, isTransparent, hideShadow} = props;
  const navigate = useNavigation();
  return (
    <View style={styles.headerContainer}>
      <Text
        numberOfLines={1}
        style={[
          styles.txtTitle,
          {color: isTransparent ? R.colors.white : R.colors.black},
        ]}>
        {title}
      </Text>

      {isBack && (
        <TouchableOpacity
          style={{
            position: 'absolute',
            left: 10,
            width: 35,
            height: 30,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => navigate.goBack()}>
          <Icon color={R.colors.black} name={'arrowleft'} size={22} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  headerContainer: {
    height: 45,
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: WIDTHXD(40),
    alignItems: 'center',
    marginBottom: 2,
    justifyContent: 'center',
    padding: 5,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },

  txtTitle: {
    flex: 1,
    fontSize: 16,
    paddingHorizontal: 10,
    textAlign: 'center',
    fontWeight: 'bold',
    color: R.colors.black,
  },
});
