import React from 'react';
import {View, StyleSheet, SafeAreaView, StatusBar} from 'react-native';

function Screen({children, style}) {
  return (
    <>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      <SafeAreaView style={[styles.screen, style]}>{children}</SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
export default Screen;
