import { createReducer, on, Action } from '@ngrx/store';
import { Istate } from './example.state';

export const initialState: Istate | any = {};

// Añadir las acciones necesarias para gestionar el reducer
const _exampleReducer = createReducer(initialState);

export function exampleReducer(state: Istate | undefined, action: Action) {
  return _exampleReducer(state, action as any);
}