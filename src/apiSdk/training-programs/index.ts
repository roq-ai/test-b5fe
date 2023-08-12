import axios from 'axios';
import queryString from 'query-string';
import { TrainingProgramInterface, TrainingProgramGetQueryInterface } from 'interfaces/training-program';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getTrainingPrograms = async (
  query?: TrainingProgramGetQueryInterface,
): Promise<PaginatedInterface<TrainingProgramInterface>> => {
  const response = await axios.get('/api/training-programs', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createTrainingProgram = async (trainingProgram: TrainingProgramInterface) => {
  const response = await axios.post('/api/training-programs', trainingProgram);
  return response.data;
};

export const updateTrainingProgramById = async (id: string, trainingProgram: TrainingProgramInterface) => {
  const response = await axios.put(`/api/training-programs/${id}`, trainingProgram);
  return response.data;
};

export const getTrainingProgramById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/training-programs/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteTrainingProgramById = async (id: string) => {
  const response = await axios.delete(`/api/training-programs/${id}`);
  return response.data;
};
