import { createAction } from '@ngrx/store';
// Actions parts
import { ECoreActions } from './core.state';

// Public
export const setLang = createAction(ECoreActions.SET_LANG, (payload: string) => ({payload}));
