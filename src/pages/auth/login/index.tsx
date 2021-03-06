import React, { useRef, useCallback } from 'react';

import { View } from 'react-native';
import { Text, Container, Input, Button } from '~/components';
import { translate } from '~/I18n';
import { Color } from '~/styles';
import { Formik, FormikValues } from 'formik';
import { CredentialsProps } from '~/interfaces/user';
import { ApplicationState } from '~/store';
import { useSelector, useDispatch } from 'react-redux';
import { AuthActions } from '~/store/ducks/auth';
import normalize from '~/utils/dynamicRatio';
import validationSchemaLogin from './yupValidation';

const login: React.FC = () => {
  const formRef = useRef<FormikValues>(null);
  const dispatch = useDispatch();

  const handleLogin = (credentials: CredentialsProps) => {
    dispatch(
      AuthActions.authenticate({
        usuario: credentials.usuario,
        senha: credentials.senha,
      }),
    );
  };
  const { loading, errorMessage } = useSelector(
    (store: ApplicationState) => store.auth,
  );

  const handleSubmit = useCallback(() => {
    if (!loading) {
      formRef.current?.handleSubmit();
    }

    return null;
  }, [loading]);

  return (
    <Container flex={1} justifyContent="center" pl={20}>
      <Text size={24} fontFamily="SFProDisplay-Bold" mb={5}>
        {translate('login-screen.enter-with-yourself')}
      </Text>
      <Text
        size={24}
        fontFamily="SFProDisplay-Bold"
        color={Color.primaryBlue}
        mb={8}
      >
        {translate('login-screen.credentials-access')}
      </Text>
      <Text size={14} fontFamily="SFProDisplay-Regular" color={Color.gray}>
        {translate('login-screen.welcome')}
      </Text>
      <Formik
        innerRef={formRef}
        validationSchema={validationSchemaLogin}
        initialValues={{
          usuario: '',
          senha: '',
        }}
        onSubmit={(values: CredentialsProps) => handleLogin(values, false)}
      >
        {({ values, errors, setFieldValue, touched }) => (
          <>
            <Input
              mt={20}
              nameIcon="user"
              background={Color.white}
              borderWidth={2}
              borderColor={Color.grayLight}
              title={translate('login-screen.user')}
              placeHolder={translate('login-screen.inform-your-user')}
              titleColor={Color.black}
              width={320}
              titlePaddingLeft={1}
              height={50}
              borderRadius={1}
              fontFamily={'SFProDisplay-Regular'}
              pl={18}
              value={values.usuario}
              errors={errors.usuario}
              touched={touched.usuario}
              setValue={(value) => setFieldValue('usuario', value)}
            />
            <Input
              mt={8}
              nameIcon="lock"
              background={Color.white}
              borderWidth={2}
              borderColor={Color.grayLight}
              title={translate('login-screen.password')}
              placeHolder={translate('login-screen.password')}
              titleColor={Color.black}
              width={320}
              titlePaddingLeft={1}
              visible
              height={50}
              borderRadius={1}
              fontFamily={'SFProDisplay-Regular'}
              pl={18}
              value={values.senha}
              errors={errors.senha}
              touched={touched.senha}
              setValue={(value) => setFieldValue('senha', value)}
            />
            {errorMessage !== '' && (
              <Text
                size={14}
                fontFamily="SFProDisplay-Bold"
                mt={5}
                color={Color.basicRed}
              >
                {errorMessage}
              </Text>
            )}
            <Button
              text={translate('login-screen.enter')}
              backgroundColor={Color.primaryBlue}
              loading={loading}
              fontSize={18}
              fontFamily="SFProDisplay-Medium"
              mt={30}
              borderRadius={4}
              w={320}
              onPress={() => handleSubmit()}
            />
            <View
              style={{
                position: 'absolute',
                bottom: normalize(14),
                right: normalize(40),
              }}
            >
              <Button
                text={translate('login-screen.fill-form')}
                backgroundColor={Color.primaryBlue}
                loading={false}
                fontSize={12}
                fontFamily="SFProDisplay-Medium"
                mt={4}
                h={25}
                borderRadius={4}
                w={80}
                onPress={() => {
                  setFieldValue('usuario', 'autenticacao.teste');
                  setFieldValue(
                    'senha',
                    'jWEsOlAUMRW9hWcS9fgYgtSTPfwDEvk3aLSZRX3RwQIbA/7VXb8SnojNsulIHMJi',
                  );
                }}
              />
            </View>
          </>
        )}
      </Formik>
    </Container>
  );
};

export default login;
