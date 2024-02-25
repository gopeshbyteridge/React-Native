import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useForm, Controller} from 'react-hook-form';
import {TextInput, Checkbox, RadioButton, Button} from 'react-native-paper';
import DropDown from 'react-native-paper-dropdown';

export const CustomDropDown = ({control, name, rules = {}, dropDownList}) => {
  const [showDropDown, setShowDropDown] = useState(false);
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      render={({field: {onChange, onBlur, value}, fieldState: {error}}) => (
        <>
          <View style={styles.radioContainer}>
            <DropDown
              label={'Location'}
              mode={'outlined'}
              visible={showDropDown}
              showDropDown={() => setShowDropDown(true)}
              onDismiss={() => setShowDropDown(false)}
              value={value}
              setValue={e => onChange(e)}
              list={dropDownList}
            />
            {error && <Text>{error.message || 'Error'}</Text>}
          </View>
        </>
      )}
    />
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
  },
  radioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
//screen
//redux tool kit implement
//realm db
//api call handling and showing data
