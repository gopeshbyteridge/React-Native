import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {CustomInput} from '../components/FormInput';
import {Button, RadioButton} from 'react-native-paper';
import {CustomDropDown} from '../components/dropdownList';
import {setuser} from '../stores/Redux/UserDetails';
import {RootStackParamList} from '../navigation/navigationTypes';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useAppSelector, useAppDispatch} from '../stores/Redux/hooks';

type EditScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'EditScreen'
>;
type Props = {
  navigation: EditScreenNavigationProp;
};

export const EditScreen = ({navigation}: Props) => {
  let user = useAppSelector(state => state.UserDetail);

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();
  const dispatch = useAppDispatch();

  const onSubmit = (data: any) => {
    dispatch(setuser(data));
    navigation.navigate('HomeScreen');
  };
  const locationList = [
    {
      label: 'Jaipur',
      value: 'Jaipur',
    },
    {
      label: 'Delhi',
      value: 'Delhi',
    },
    {
      label: 'Others',
      value: 'Others',
    },
  ];

  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.loginText}>EDIT PROFILE</Text>
      <View style={styles.customInput}>
        <CustomInput
          label={'UserName'}
          control={control}
          name={'UserName'}
          placeholder={'Username'}
          rules={{required: 'Username is required'}}
        />

        <CustomInput
          label={'Email'}
          control={control}
          name={'Email'}
          placeholder={'Email'}
          rules={{required: 'Email is required'}}
        />

        <CustomDropDown
          control={control}
          name={'Location'}
          rules={{required: 'Location is required'}}
          dropDownList={locationList}
        />
        <View
          style={{
            marginVertical: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Button
            style={{
              marginVertical: 10,
              width: '50%',
            }}
            mode="contained"
            onPress={handleSubmit(onSubmit)}>
            Submit
          </Button>
        </View>
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
