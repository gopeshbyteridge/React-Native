import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useForm} from 'react-hook-form';
import {CustomInput} from '../components/FormInput';
import {Button} from 'react-native-paper';
import {RootStackParamList} from '../navigation/navigationTypes';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type LoginScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'LoginScreen'
>;

type Props = {
  navigation: LoginScreenNavigationProp;
};

export const LoginScreen = ({navigation}: Props) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const onSubmit = () => {
    navigation.navigate('HomeScreen');
  };

  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.loginText}>LOGIN</Text>
      <View style={styles.customInput}>
        <CustomInput
          label={'Email'}
          control={control}
          name={'Email'}
          placeholder={'Email'}
          rules={{required: 'Email is required'}}
        />

        <CustomInput
          control={control}
          name={'Password'}
          label={'Password'}
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
        <View style={styles.btnContianer}>
          <Button
            style={styles.btn}
            mode="contained"
            onPress={handleSubmit(onSubmit)}>
            Login
          </Button>
          <Button
            style={styles.btn}
            mode="contained"
            onPress={() => navigation.navigate('SignUpScreen')}>
            Sign Up
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
  btn: {
    width: '60%',
    marginVertical: 10,
  },
  btnContianer: {
    alignItems: 'center',
  },
  customInput: {
    padding: 30,
    width: '100%',
  },
  loginText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,
  },
});
