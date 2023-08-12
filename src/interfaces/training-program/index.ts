import { ProgressInterface } from 'interfaces/progress';
import { HabitInterface } from 'interfaces/habit';
import { GetQueryInterface } from 'interfaces';

export interface TrainingProgramInterface {
  id?: string;
  name: string;
  habit_id?: string;
  created_at?: any;
  updated_at?: any;
  progress?: ProgressInterface[];
  habit?: HabitInterface;
  _count?: {
    progress?: number;
  };
}

export interface TrainingProgramGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  habit_id?: string;
}
