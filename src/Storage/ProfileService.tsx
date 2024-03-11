import {BSON} from 'realm';
import Opration from './Opration';
import {Profile} from './Realm';

export class ProfileService {
  op;
  profile;
  constructor() {
    this.op = new Opration();
    this.profile = Profile;
  }
  async addProfile(data: any) {
    // let obj = {...data, _id: new BSON.ObjectId()};
    return this.op.Create(this.profile, data);
  }

  async getProfile(data: any) {
    return this.op.Read(this.profile, data);
  }
}
