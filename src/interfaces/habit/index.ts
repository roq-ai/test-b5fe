import { TrainingProgramInterface } from 'interfaces/training-program';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface HabitInterface {
  id?: string;
  name: string;
  user_id?: string;
  created_at?: any;
  updated_at?: any;
  training_program?: TrainingProgramInterface[];
  user?: UserInterface;
  _count?: {
    training_program?: number;
  };
}

export interface HabitGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  user_id?: string;
}
