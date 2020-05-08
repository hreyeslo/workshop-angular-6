import { createReducer, on, Action } from '@ngrx/store';
import { Istate } from './example.state';
import { getUserOk } from './example.actions';

export const initialState: Istate | any = {};

// Añadir las acciones necesarias para gestionar el reducer
const _exampleReducer = createReducer(initialState,
	on(getUserOk, (state, {payload}) => ({...state, ...payload}))
);

export function exampleReducer(state: Istate | undefined, action: Action) {
	return _exampleReducer(state, action as any);
}
