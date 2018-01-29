import { Action } from '@ngrx/store';

export const LOAD_SKICAMS =  '[Skicams] Load Skicams';
export const LOAD_SKICAMS_FAIL =  '[Skicams] Load Skicams Fail';
export const LOAD_SKICAMS_SUCCESS =  '[Skicams] Load Skicams Succes';

export class LoadSkicams implements Action {
  readonly type = LOAD_SKICAMS;
}

export class LoadSkicamsFail implements Action {
  readonly type = LOAD_SKICAMS_FAIL;
  constructor(public payload: any) {}
}

export class LoadSkicamsSuccess implements Action {
  readonly type = LOAD_SKICAMS_SUCCESS;
  constructor(public payload: any) {}
}


export type LoadSkicamsAction =
| LoadSkicams
| LoadSkicamsFail
| LoadSkicamsSuccess;
