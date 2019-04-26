import * as auth from '../../actions/auth/auth';

export interface State extends Object {
  email: string;
  password: string;
}

export function authReducer(state = {email: '', password: ''}, action: auth.Action): State {
  switch (action.type) {
    case auth.EDIT_EMAIL:
      return {
        ...state,
        email: action.email
      }
    case auth.EDIT_PASSWORD:
      return {
        ...state,
        password: action.password
      }
    default:
      return state;
  }
}
