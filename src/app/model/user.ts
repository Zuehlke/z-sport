import {Sport} from './sport';

export class User {
  id: number;
  email: string;
  subscribedSports: Sport[];

  constructor(id: number, email: string, subscribedSports: Sport[]) {
    this.id = id;
    this.email = email;
    this.subscribedSports = subscribedSports;
  }
}
