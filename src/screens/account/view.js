import React, {Component} from 'react';
import {View, Text, SafeAreaView, StyleSheet} from 'react-native';
import Header from '../../components/Header/Header';
import i18n from '../../helper/i18/i18n';
import R from '../../assets/R';
import PickerItem from '../../components/Picker/PickerItem';
import {WIDTH} from '../../config/Functions';

const AccountView = props => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title={i18n.t('Account')} />
      <View style={styles.body}>
        <Text>Account screen</Text>
        <PickerItem
          value={{value: '1', name: 'Name 1'}}
          data={[
            {
              value: '1',
              name: 'Name 1',
            },
            {
              value: '2',
              name: 'Name 2',
            },
          ]}
        />
      </View>
    </SafeAreaView>
  );
};

export default AccountView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: R.colors.white,
  },
  body: {
    flex: 1,
    paddingHorizontal: WIDTH(10),
  },
});
