import {StyleSheet, View} from 'react-native';
import {OtpInput} from 'react-native-otp-entry';
import {CustomBtn} from '../components/btn';

export const VASVerifyPinScreen = ({navigation}) => {
  const onSubmit = () => {
    navigation.navigate('HomeScreen');
  };

  return (
    <View style={styles.sectionContainer}>
      <View style={styles.customInput}>
        <View style={styles.containerPin}>
          <OtpInput
            secureTextEntry={true}
            focusColor="black"
            numberOfDigits={4}
            onTextChange={text => {
              console.log(text);
            }}
            autoFocus={true}
            hideStick={false}
            theme={{
              focusedPinCodeContainerStyle: {borderColor: '#4C6700'},
              focusStickStyle: {borderColor: '#ffffff'},
              pinCodeContainerStyle: {
                height: 90,
                width: 60,
                borderWidth: 1,
                borderColor: '#909090',
              },
            }}
          />
        </View>
        <View style={styles.btnContianer}>
          <CustomBtn mode="contained" text="Verify" onPressMethod={onSubmit} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  btnContianer: {
    marginTop: 24,
    paddingHorizontal: 30,
  },
  customInput: {
    marginHorizontal: 30,
  },
  containerPin: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
