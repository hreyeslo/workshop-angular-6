import { createReducer, on, Action } from '@ngrx/store';
// Reducer parts
import { ICoreStore } from './core.state';
import { setLang } from './core.actions';

export const initialState: ICoreStore = {};

const _coreReducer = createReducer(initialState,
  on(setLang, (state, {payload}) => ({
    ...state,
    i18n: {
      ...state.i18n,
      currentLang: payload
    }
  }))
);

export function coreReducer(state: ICoreStore | undefined, action: Action) {
  return _coreReducer(state, action as any);
}
