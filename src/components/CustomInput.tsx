import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {TextInput, Checkbox, RadioButton, Button} from 'react-native-paper';

export const CustomInput = ({
  control,
  name,
  placeholder,
  rules = {},
  secureTextEntry = false,
}) => {
  return (
    <View>
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({field: {onChange, onBlur, value}, fieldState: {error}}) => (
          <>
            <TextInput
              placeholder={placeholder}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              style={[styles.textInput]}
              error={error ? true : false}
              secureTextEntry={secureTextEntry}
            />
            {error && <Text>{error.message || 'Error'}</Text>}
          </>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    marginHorizontal: 50,
  },
  textInput: {
    marginVertical: 10,
  },
  inputError: {
    borderColor: 'red',
    borderWidth: 1,
  },
  input: {
    borderWidth: 1,
  },
});
//screen
//redux tool kit implement
//realm db
//api call handling and showing data
