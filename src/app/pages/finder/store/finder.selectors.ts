import { createSelector } from '@ngrx/store';
import { IAppStore } from '../../../shared/models_api';
// Selector parts
import { IFinderStore, featureStoreName } from './finder.state';

export interface IFeatureAppStore extends IAppStore {
  [featureStoreName]: IFinderStore;
}

export const selectFinderStore = (state: IFeatureAppStore) => state[featureStoreName];

export const selectBreeds = createSelector(selectFinderStore, (state: IFinderStore) => state.breeds);
export const selectBreedImages = createSelector(selectFinderStore, (state: IFinderStore) => state.currentBreedImages);
