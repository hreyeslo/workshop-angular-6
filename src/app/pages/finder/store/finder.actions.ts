import { createAction, props } from '@ngrx/store';
// Actions parts
import { EFinderActions } from './finder.state';
import { IFinderBreeds } from '../models/finder.model';

// Public
export const loadBreeds = createAction(EFinderActions.LOAD_BREEDS);
export const loadBreedImages = createAction(EFinderActions.LOAD_BREED_IMAGES, (payload: string) => ({payload}));

// Private
export const loadBreedsSuccess = createAction(EFinderActions.LOAD_BREEDS_SUCCESS, props<{payload: IFinderBreeds}>());
export const loadBreedsError = createAction(EFinderActions.LOAD_BREEDS_ERROR);

export const loadBreedImagesSuccess = createAction(EFinderActions.LOAD_BREED_IMAGES_SUCCESS, props<{payload: string[]}>());
export const loadBreedImagesError = createAction(EFinderActions.LOAD_BREED_IMAGES_ERROR);
