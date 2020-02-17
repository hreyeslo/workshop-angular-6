import { createSelector } from '@ngrx/store';
import { IAppStore } from '../../shared/models_api';
// Selector parts
import { featureStoreName, ICoreStore } from './core.state';

export interface ICoreAppStore extends IAppStore {
  [featureStoreName]: ICoreStore;
}

export const selectCoreStore = (state: ICoreAppStore) => state[featureStoreName];

export const selectLang = createSelector(selectCoreStore, (state: ICoreStore) => state.i18n && state.i18n.currentLang);
