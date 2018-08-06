/*
 * Login Messages
 *
 * This contains all the text for the Login component.
 */

import { defineMessages } from 'react-intl';

export default defineMessages({
  header: {
    id: 'app.containers.Login.header',
    defaultMessage: 'Iniciar sesión',
  },
  facebookAuthButton: {
  	id: 'app.containers.Login.fbAuthButton',
    defaultMessage: 'Iniciar sesión con Facebook',
  },
  normalAuthLoginEmail: {
  	id: 'app.containers.Login.normalAuthEmail',
    defaultMessage: 'Correo eletrónico',
  },
  normalAuthLoginPassword: {
  	id: 'app.containers.Login.normalAuthPassword',
    defaultMessage: 'Contraseña',
  },
  normalAuthLoginButton: {
  	id: 'app.containers.Login.normalAuthLButton',
    defaultMessage: 'Ingresar',
  },
  forgotPassword: {
  	id: 'app.containers.Login.forgotPassword',
    defaultMessage: '¿Olvidaste tu contraseña?',
  },
  forgotPassword: {
  	id: 'app.containers.Login.forgotPassword',
    defaultMessage: '¿Olvidaste tu contraseña?',
  },
  createNewAccount: {
  	id: 'app.containers.Login.createAccount',
    defaultMessage: 'Crea tu cuenta',
  },
  requiredFieldsError: {
  	id: 'app.containers.Login.requiredFieldsError',
    defaultMessage: 'Es necesario introducir el mail y la contraseña',
  },
  wrongCredentialsError: {
  	id: 'app.containers.Login.wrongCredentials',
    defaultMessage: 'Email y/o contraseña incorrectos',
  }
});
