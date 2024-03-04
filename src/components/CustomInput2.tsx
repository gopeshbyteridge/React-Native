import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {TextInput, Text} from 'react-native-paper';

export const CustomInputTwo = ({
  placeholder,
  label,
  secureTextEntry = false,
}) => {
  const [showPwd, setShowPWd] = useState(secureTextEntry);
  const [text, setText] = useState(''); //move it to component
  return (
    <TextInput
      outlineColor="#4C6700"
      activeOutlineColor="#4C6700"
      mode="outlined"
      label={label}
      placeholder={placeholder}
      onChangeText={setText}
      value={text}
      style={[styles.textInput]}
      secureTextEntry={showPwd}
      right={
        secureTextEntry ? (
          <TextInput.Icon
            icon={showPwd ? 'eye' : 'eye-off'}
            onPress={() => {
              setShowPWd(!showPwd);
            }}
          />
        ) : (
          ''
        )
      }
      left={label == 'Email' ? <TextInput.Icon icon={'account'} /> : ''}
    />
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
