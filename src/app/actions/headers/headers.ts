import { Action } from '@ngrx/store';

import * as fromHeaders from '../../reducers/headers/headers';

export const ADD_HEADER = 'ADD_HEADER';
export const REMOVE_HEADER = 'REMOVE_HEADER';
export const EDIT_HEADER_KEY = 'EDIT_HEADER_KEY';
export const EDIT_HEADER_VALUE = 'EDIT_HEADER_VALUE';
export const AUTH_HEADER_VALUE = 'AUTH_HEADER_VALUE';
export const SET_HEADERS = 'SET_HEADERS';

export class AddHeaderAction implements Action {
    readonly type = ADD_HEADER;

    constructor(public windowId: string) {}
}

export class RemoveHeaderAction implements Action {
    readonly type = REMOVE_HEADER;

    constructor(public payload: number, public windowId: string) {}
}

export class AuthHeaderAction implements Action {
  readonly type = AUTH_HEADER_VALUE;

  constructor(public token: string, public windowId: string) {}
}

export class EditHeaderKeyAction implements Action {
    readonly type = EDIT_HEADER_KEY;

    constructor(public payload: any, public windowId: string) {}
}

export class EditHeaderValueAction implements Action {
    readonly type = EDIT_HEADER_VALUE;

    constructor(public payload: any, public windowId: string) {}
}

export class SetHeadersAction implements Action {
  readonly type = SET_HEADERS;

  constructor(public payload: { headers: Array<fromHeaders.Header> }, public windowId: string) { }
}

export type Action = AuthHeaderAction |
  AddHeaderAction | RemoveHeaderAction | EditHeaderKeyAction | EditHeaderValueAction | SetHeadersAction;
