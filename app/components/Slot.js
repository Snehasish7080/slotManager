import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import colors from '../config/colors';
import AppText from './AppText';
const windowWidth = Dimensions.get('window').width;

const Slot = ({id, slotNm, time, onPress, isSelect = false}) => {
  return (
    <View style={styles.SlotContainer}>
      <TouchableOpacity
        style={
          isSelect ? styles.SelectedSlotTextContainer : styles.SlotTextContainer
        }
        activeOpacity={0.7}
        onPress={onPress}>
        <AppText style={styles.SlotText}>{slotNm}</AppText>
      </TouchableOpacity>
      <AppText style={styles.SlotTimeText}>{time}</AppText>
    </View>
  );
};

export default Slot;

const styles = StyleSheet.create({
  SlotContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    marginVertical: 10,
    width: windowWidth / 4,
  },
  SlotTextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.secondary,
    width: 50,
    height: 50,
    borderRadius: 15,
  },
  SelectedSlotTextContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
    width: 50,
    height: 50,
    borderRadius: 15,
  },
  SlotText: {
    color: colors.white,
    fontSize: 20,
    fontWeight: 'bold',
  },
  SlotTimeText: {
    marginTop: 5,
    fontSize: 15,
  },
});
