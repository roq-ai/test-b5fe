import { TrainingProgramInterface } from 'interfaces/training-program';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ProgressInterface {
  id?: string;
  status: string;
  training_program_id?: string;
  user_id?: string;
  created_at?: any;
  updated_at?: any;

  training_program?: TrainingProgramInterface;
  user?: UserInterface;
  _count?: {};
}

export interface ProgressGetQueryInterface extends GetQueryInterface {
  id?: string;
  status?: string;
  training_program_id?: string;
  user_id?: string;
}
