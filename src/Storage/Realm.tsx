import {Realm, createRealmContext} from '@realm/react';
import {BSON, ObjectSchema} from 'realm';

export class Profile extends Realm.Object<Profile> {
  _id!: BSON.ObjectId;
  UserName!: string;
  Email!: string;
  Location!: string;

  static schema: ObjectSchema = {
    name: 'Profile',
    properties: {
      _id: {type: 'objectId', default: () => new BSON.ObjectId()},
      Email: {type: 'string', indexed: 'full-text'},
      UserName: 'string',
      Location: 'string',
    },
    primaryKey: '_id',
  };
}
//create realm context
// export const RealmContext = createRealmContext({
//   schema: [Profile],
// });
