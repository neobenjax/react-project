/**
 *
 * Login
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { changeEmail, changePassword, validateCredentials } from './actions';
import makeSelectLogin from './selectors';
import { makeSelectEmail, makeSelectPassword, makeSelectError } from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

/* eslint-disable react/prefer-stateless-function */
export class Login extends React.Component {
  /**
   * when initial state username is not null, submit the form to load repos
   */
  componentDidMount() {
    if (this.props.email && this.props.email.trim().length > 0
        && this.props.password && this.props.password.trim().length > 0) {
      this.props.onSubmitForm();
    }
  }

  render() {
    return (
      <div className="centered-container">
        <h1>
          <FormattedMessage {...messages.header} />
        </h1>
        <div className="facebook-auth">
          <button onClick={this.props.onFacebookLogin}>
            <FormattedMessage {...messages.facebookAuthButton} />
          </button>
        </div>
        <form onSubmit={this.props.onSubmitForm} type="POST">
          <div className="login-container">
            <div className="field">
              <input 
                type="text" id="email" name="email" 
                placeholder="Correo electrónico" 
                value={this.props.email}
                onChange={this.props.onChangeEmail}/>
            </div>
            <div className="field">
              <input 
                type="password" id="password" name="password" 
                placeholder="Contraseña"
                value={this.props.password}
                onChange={this.props.onChangePassword}/>
            </div>
            <div className="field">
              <button>
                <FormattedMessage {...messages.normalAuthLoginButton} />
              </button>
            </div>
            <div className="login-error">
              {this.props.error ? (
                <FormattedMessage {...messages.requiredFieldsError} />
              ) : (
                ''
              )}
            </div>
            <div className="user-actions">
              <p>
                <a href="#" onClick={this.props.onForgotPassword}>
                  <FormattedMessage {...messages.forgotPassword} />
                </a>
              </p>
              <p>
                <a href="#" onClick={this.props.onCreateNewAccount}>
                  <FormattedMessage {...messages.createNewAccount} />
                </a>
              </p>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  dispatch: PropTypes.func.isRequired,
  email: PropTypes.string,
  password: PropTypes.string,
  error: PropTypes.bool,
  onSubmitForm: PropTypes.func,
  onFacebookLogin: PropTypes.func,
  onForgotPassword: PropTypes.func,
  onCreateNewAccount: PropTypes.func,
  onChangeEmail: PropTypes.func,
  onChangePassword: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  login: makeSelectLogin(),
  email: makeSelectEmail(),
  password: makeSelectPassword(),
  error: makeSelectError(),
});

function mapDispatchToProps(dispatch, props) {
  return {
    dispatch,
    onChangeEmail: evt => dispatch(changeEmail(evt.target.value)),
    onChangePassword: evt => dispatch(changePassword(evt.target.value)),
    onFacebookLogin: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      alert('Facebook login');
    },
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(validateCredentials());
    },
    onForgotPassword: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      alert('Olvidar contraseña');
    },
    onCreateNewAccount: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      alert('Crear una nueva cuenta');
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'login', reducer });
const withSaga = injectSaga({ key: 'login', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Login);
