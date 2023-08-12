import * as yup from 'yup';

export const progressValidationSchema = yup.object().shape({
  status: yup.string().required(),
  training_program_id: yup.string().nullable(),
  user_id: yup.string().nullable(),
});
