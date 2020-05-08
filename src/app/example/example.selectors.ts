// Crear el selector GET_NAME para poder recuperar la clave first_name

import { createSelector } from '@ngrx/store';
import { Istate } from './example.state';

export const selectExample = (state: any) => state['Example'];

export const selectFirstName = createSelector(selectExample, (state: Istate): string => state.first_name);
