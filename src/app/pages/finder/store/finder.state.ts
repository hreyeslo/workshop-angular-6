import { IFinderBreeds } from '../models/finder.model';

export const featureStoreName = 'Finder';

export enum EFinderActions {
  LOAD_BREEDS = 'LOAD_BREEDS',
  LOAD_BREEDS_SUCCESS = 'LOAD_BREEDS_SUCCESS',
  LOAD_BREEDS_ERROR = 'LOAD_BREEDS_ERROR',
  LOAD_BREED_IMAGES = 'LOAD_BREED_IMAGES',
  LOAD_BREED_IMAGES_SUCCESS = 'LOAD_BREED_IMAGES_SUCCESS',
  LOAD_BREED_IMAGES_ERROR = 'LOAD_BREED_IMAGES_ERROR',
}

export interface IFinderStore {
  breeds: IFinderBreeds;
  currentBreedImages: string[];
}
