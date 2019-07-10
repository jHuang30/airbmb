import * as APIUtil from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";
export const DELETE_SESSION_ERRORS = "DELETE_SESSION_ERRORS";
export const RECEIVE_CURRENT_USER_INFO = "RECEIVE_CURRENT_USER_INFO";

export const login = user => dispatch =>
  APIUtil.login(user).then(
    user => dispatch(receiveCurrentUser(user)),
    err => {
      return dispatch(receiveSessionErrors(err.responseJSON));
    }
  );

export const signup = user => dispatch =>
  APIUtil.signup(user).then(
    user => dispatch(receiveCurrentUser(user)),
    err => dispatch(receiveSessionErrors(err.responseJSON))
  );

export const logout = () => dispatch =>
  APIUtil.logout().then(() => dispatch(logoutCurrentUser()));

const receiveCurrentUser = user => {
  return {
    type: RECEIVE_CURRENT_USER,
    user
  };
};

const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

const receiveSessionErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const deleteSessionErrors = () => ({
  type: DELETE_SESSION_ERRORS
});
