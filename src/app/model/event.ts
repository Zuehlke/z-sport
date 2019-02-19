import {User} from './user';
import {Sport} from './sport';

export class Event {
  id: number;
  description: string;
  location: string;
  date: Date;
  duration: number;
  minParticipants: number;
  maxParticipants: number;
  deadLine: Date;
  user: User;
  sport: Sport;
  participants: User[];
}
