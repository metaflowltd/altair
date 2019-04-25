import { Action } from '@ngrx/store';



export const EDIT_EMAIL = 'EDIT_EMAIL';
export const EDIT_PASSWORD = 'EDIT_PASSWORD';
export const LOGIN = 'LOGIN';

export class EditEmailAction implements Action {
  readonly type = EDIT_EMAIL;

  constructor(public email: string, public windowId: string) {}
}

export class EditPasswordAction implements Action {
  readonly type = EDIT_PASSWORD;

  constructor(public password: string, public windowId: string) {}
}

export class LoginAction implements Action {
  readonly type = LOGIN;

  constructor(public windowId: string) {}
}

export type Action = EditEmailAction | EditPasswordAction | LoginAction;

