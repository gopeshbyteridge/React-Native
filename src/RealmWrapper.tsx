import React, {useEffect, useState} from 'react';
import {useApp, RealmProvider} from '@realm/react';
import App from './App';
import Realm, {OpenRealmBehaviorType} from 'realm';
import {Profile} from './Storage/Realm';
import {ActivityIndicator, SafeAreaView} from 'react-native';

// const {RealmProvider} = RealmContext;

const RealmWrapper = () => {
  const app = useApp();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const login = async () => {
      // const credetials = Realm.Credentials.anonymous();
      const credetials = Realm.Credentials.emailPassword(
        'gopesh@gmail.com',
        'gopesh',
      );
      await app.logIn(credetials);
      setIsLoggedIn(true);
    };
    login();
  }, [app]);

  return (
    <SafeAreaView style={{flex: 1}}>
      {isLoggedIn ? (
        <RealmProvider
          schema={[Profile]}
          sync={{
            flexible: true,
            newRealmFileBehavior: {
              type: OpenRealmBehaviorType.DownloadBeforeOpen,
            },
            existingRealmFileBehavior: {
              type: OpenRealmBehaviorType.OpenImmediately,
            },
          }}>
          <App />
        </RealmProvider>
      ) : (
        <ActivityIndicator size={'large'} />
      )}
    </SafeAreaView>
  );
};

export default RealmWrapper;
