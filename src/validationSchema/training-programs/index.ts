import * as yup from 'yup';

export const trainingProgramValidationSchema = yup.object().shape({
  name: yup.string().required(),
  habit_id: yup.string().nullable(),
});
