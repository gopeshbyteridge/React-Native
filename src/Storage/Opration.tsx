import {AnyRealmObject, BSON, ObjectSchema} from 'realm';
import {useObject, useRealm} from '@realm/react';
import {Profile} from './Realm';

type modelType = {
  Profile: Profile;
};

export default class Opration {
  realm = useRealm();

  async Create(model: any, data: any) {
    try {
      console.log('Create', data);
      let res = this.realm.write(() => {
        this.realm.create(model, data);
      });
      console.log('Create response', res);
      return res;
    } catch (error) {
      console.log('Create', error);
    }
  }

  async Read(model: any, data: any) {
    try {
      let res = this.realm.write(() => {
        useObject(model, data);
      });
      console.log('Read', res);
      return res;
    } catch (error) {
      console.log('Read', error);
    }
  }
}
