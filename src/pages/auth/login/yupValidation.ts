import * as yup from 'yup';

export const validationSchemaLogin = yup.object().shape({
  usuario: yup
    .string()
    .required('* Campo usuário obrigatório.'),

  senha: yup.string().required('* Campo senha obrigatório.'),
});

export default validationSchemaLogin;
