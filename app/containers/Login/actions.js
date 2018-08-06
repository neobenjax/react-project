/*
 *
 * Login actions
 *
 */

import { DEFAULT_ACTION, CHANGE_EMAIL, CHANGE_PASSWORD, VALIDATE_CREDENTIALS } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}


/**
 * Changes the email input field of the form
 *
 * @param  {email} email The new text of the input field
 *
 * @return {object} An action object with a type of CHANGE_EMAIL
 */
export function changeEmail(email) {
	console.log('Change email', email);
  return {
    type: CHANGE_EMAIL,
    email,
  };
}


/**
 * Changes the password input field of the form
 *
 * @param  {password} password The new text of the input field
 *
 * @return {object} An action object with a type of CHANGE_EMAIL
 */
export function changePassword(password) {
	console.log('Change password', password);
  return {
    type: CHANGE_PASSWORD,
    password,
  };
}


/**
 * Changes the password input field of the form
 *
 * @param  {password} password The new text of the input field
 *
 * @return {object} An action object with a type of CHANGE_EMAIL
 */
export function validateCredentials() {
	console.log('Validate Credentials');
  return {
    type: VALIDATE_CREDENTIALS
  };
}


