/*
 *
 * Login reducer
 *
 */

import { fromJS } from 'immutable';
import { DEFAULT_ACTION, CHANGE_EMAIL, CHANGE_PASSWORD, VALIDATE_CREDENTIALS } from './constants';

export const initialState = fromJS({
	email: '',
	password: '',
	error: false
});

function loginReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    case CHANGE_EMAIL:
      return state.set('email', action.email);
    case CHANGE_PASSWORD:
      return state.set('password', action.password);
    case CHANGE_PASSWORD:
      return state.set('password', action.password);
    case VALIDATE_CREDENTIALS:
    	console.log('Validate credentials');
    	if (state.get('email') === '' || state.get('password') === '') {
    		return state.set('error', true);
    	}
    	return state.set('error', false);
      return state;
    default:
      return state;
  }
}

export default loginReducer;
