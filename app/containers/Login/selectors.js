import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the login state domain
 */

const selectLoginDomain = state => state.get('login', initialState);

const makeSelectEmail = () =>
  createSelector(selectLoginDomain, loginState => loginState.get('email'));

const makeSelectPassword = () =>
  createSelector(selectLoginDomain, loginState => loginState.get('password'));

const makeSelectError = () =>
  createSelector(selectLoginDomain, loginState => loginState.get('error'));

/**
 * Other specific selectors
 */

/**
 * Default selector used by Login
 */

const makeSelectLogin = () =>
  createSelector(selectLoginDomain, substate => substate.toJS());

export default makeSelectLogin;
export { makeSelectEmail, makeSelectPassword, makeSelectError }
export { selectLoginDomain };
