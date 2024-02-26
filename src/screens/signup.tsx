import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {CustomInput} from '../components/CustomInput';
import {Button, RadioButton} from 'react-native-paper';
import {CustomRadioBtn} from '../components/radioBtn';
import DropDown from 'react-native-paper-dropdown';
import {CustomDropDown} from '../components/dropdownList';
import {CheckBox} from '../components/CheckBox';

export const SignUpScreen = ({navigation}) => {
  const {
    control,
    handleSubmit,
    watch,
    formState: {errors},
  } = useForm();

  const onSubmit = () => {};
  const pwd = watch('Password');
  const locationList = [
    {
      label: 'Jaipur',
      value: 'jaipur',
    },
    {
      label: 'Delhi',
      value: 'delhi',
    },
    {
      label: 'Others',
      value: 'others',
    },
  ];

  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.loginText}>SIGNUP</Text>
      <View style={styles.customInput}>
        <CustomInput
          control={control}
          name={'UserName'}
          placeholder={'Username'}
          rules={{required: 'Username is required'}}
        />

        <CustomInput
          control={control}
          name={'Email'}
          placeholder={'Email'}
          rules={{required: 'Email is required'}}
        />

        <CustomInput
          control={control}
          name={'Password'}
          placeholder={'Password'}
          rules={{
            required: 'Password is required',
            minLength: {
              value: 6,
              message: 'Password should be minimum of 6 char',
            },
          }}
          secureTextEntry={true}
        />

        <CustomInput
          control={control}
          name={'Confirm password'}
          placeholder={'Confirm Password'}
          rules={{
            required: 'Password is required',
            minLength: {
              value: 6,
              message: 'Password should be miimum of 6 char',
            },
            validate: (value: string) => {
              return value == pwd || 'Password does not match';
            },
          }}
          secureTextEntry={true}
        />

        <CustomRadioBtn
          control={control}
          name={'Radio btn'}
          text={'Accept terms & condtions'}
        />

        <CheckBox
          control={control}
          name={'chcekbox'}
          text={'Accept terms & condtions'}></CheckBox>

        <CustomDropDown
          control={control}
          name={'DropDown'}
          rules={{required: 'Location is required'}}
          dropDownList={locationList}
        />

        <Button
          style={{
            marginVertical: 10,
          }}
          mode="contained"
          onPress={handleSubmit(onSubmit)}>
          Submit
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    marginVertical: 10,
  },
  loginText: {
    paddingTop: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,
  },
  btn: {
    width: '50%',
  },
  customInput: {
    padding: 30,
    width: '100%',
  },
  radio: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
