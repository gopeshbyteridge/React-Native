import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useForm} from 'react-hook-form';
import {CustomInput} from '../components/CustomInput';
import {Button, Text, Card, Icon, Avatar} from 'react-native-paper';

export const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.sectionContainer}>
      <Text style={styles.loginText}>Home</Text>
      <View style={styles.customInput}>
        <View style={styles.btnContianer}>
          <Card>
            <Card.Content>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginBottom: 10,
                }}>
                <Text variant="titleLarge">Details</Text>
                <Avatar.Icon size={24} icon="account" />
              </View>
              <Text variant="bodyMedium"> UserName: Gopesh </Text>
              <Text variant="bodyMedium"> Email: Gopeshy@byteridge.com</Text>
              <Text variant="bodyMedium"> Location: Jaipur</Text>
            </Card.Content>
            <Card.Actions>
              <Button
                icon={'account-edit'}
                style={styles.btn}
                mode="contained"
                onPress={() => navigation.navigate('EditScreen')}>
                Edit Profile
              </Button>
            </Card.Actions>
          </Card>
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
