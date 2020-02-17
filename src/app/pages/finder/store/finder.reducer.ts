import { createReducer, on, Action } from '@ngrx/store';
// Reducer parts
import { loadBreedsSuccess, loadBreedsError, loadBreedImagesSuccess } from './finder.actions';
import { IFinderStore } from './finder.state';

export const initialState: IFinderStore = {
  breeds: {},
  currentBreedImages: []
};

const _finderReducer = createReducer(initialState,
  on(loadBreedsSuccess, (state, {payload}) => ({...state, breeds: payload})),
  on(loadBreedsError, state => {
    console.error('Empty breeds');
    return {
      ...state,
      breeds: {}
    };
  }),
  on(loadBreedImagesSuccess, (state, {payload}) => ({...state, currentBreedImages: payload})),
  on(loadBreedsError, state => {
    console.error('Empty breed images');
    return {
      ...state,
      currentBreedImages: []
    };
  })
);

export function finderReducer(state: IFinderStore | undefined, action: Action) {
  return _finderReducer(state, action as any);
}
