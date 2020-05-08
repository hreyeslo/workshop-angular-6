// Crear las acciones necesarias para solicitar el perfil

import { createAction, props } from '@ngrx/store';
import { EExampleActions, Istate } from './example.state';

export const getUser = createAction(EExampleActions.GET_USER);
export const getUserOk = createAction(EExampleActions.GET_USER_OK, props<{payload: Istate}>());
