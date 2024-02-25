import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {CustomInput} from '../components/CustomInput';
import {Button, RadioButton} from 'react-native-paper';
import {CustomDropDown} from '../components/dropdownList';

export const EditScreen = ({navigation}) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const onSubmit = () => {
    navigation.navigate('HomeScreen');
  };
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
      <Text style={styles.loginText}>EDIT PROFILE</Text>
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

        <CustomDropDown
          control={control}
          name={'DropDown'}
          rules={{required: 'Location is required'}}
          dropDownList={locationList}
        />

        <Button mode="contained" onPress={handleSubmit(onSubmit)}>
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
