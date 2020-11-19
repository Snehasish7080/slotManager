import React from 'react';
import {StyleSheet, View} from 'react-native';
import Screen from '../components/Screen';
import AppText from '../components/AppText';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import AppForm from '../components/AppForm';
import AppFormField from '../components/AppFormField';
import SubmitButton from '../components/SubmitButton';
import * as Yup from 'yup';
import {useDispatch, useSelector} from 'react-redux';

import colors from '../config/colors';
import {addSlot} from '../redux/SlotDetailRedux/Action';

const validationSchema = Yup.object({
  firstName: Yup.string().required().min(1).label('First Name'),
  lastName: Yup.string().required().min(1).label('Last Name'),
  mobile: Yup.number().required().label('Mobile No.'),
});

const SlotDetailScreen = ({route, navigation}) => {
  const {id} = route.params;
  const {SlotDetails} = useSelector((state) => state.SlotDetailState);
  const findIndex = SlotDetails.findIndex((i) => i.id === id);
  const dispatch = useDispatch();
  // console.log(SlotDetails);
  return (
    <Screen style={styles.Container}>
      <View style={styles.Heading}>
        <AppText style={styles.HeadingText}>Please enter your details</AppText>
      </View>
      <AppForm
        initialValues={{
          id: id,
          firstName: findIndex !== -1 ? SlotDetails[findIndex].firstName : '',
          lastName: findIndex !== -1 ? SlotDetails[findIndex].lastName : '',
          mobile: findIndex !== -1 ? SlotDetails[findIndex].mobile : '',
        }}
        onSubmit={(values) => {
          dispatch(addSlot(values));
          navigation.goBack();
        }}
        validationSchema={validationSchema}>
        <AppFormField
          maxLength={255}
          name="firstName"
          placeholder="First Name"
          width="85%"
          defaultValue={
            findIndex !== -1 ? SlotDetails[findIndex].firstName : ''
          }
        />
        <AppFormField
          maxLength={255}
          name="lastName"
          placeholder="Last Name"
          width="85%"
          defaultValue={findIndex !== -1 ? SlotDetails[findIndex].lastName : ''}
        />
        <AppFormField
          keyboardType="numeric"
          maxLength={10}
          name="mobile"
          placeholder="Mobile Number"
          width="85%"
          defaultValue={findIndex !== -1 ? SlotDetails[findIndex].mobile : ''}
        />
        <View style={styles.btnContainer}>
          <AppButton
            title="Cancel"
            width="40%"
            onPress={() => navigation.goBack()}
          />
          <SubmitButton title="Save" color="secondary" width="40%" />
        </View>
      </AppForm>
    </Screen>
  );
};

export default SlotDetailScreen;

const styles = StyleSheet.create({
  Container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  Heading: {
    marginVertical: 30,
  },
  HeadingText: {
    fontSize: 20,
    opacity: 0.7,
  },

  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    width: '100%',
    marginVertical: 20,
  },
});
