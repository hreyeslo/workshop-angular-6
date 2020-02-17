import { Injectable } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
// // Shared service
import { SharedBreedsService } from '../../../shared/services_api';
// Shared models
import { IBreedsList } from '../../../shared/models_api';
// Service parts
import { AbstractFinderService } from './abstract-finder.service';
import { IFinderBreeds } from '../models/finder.model';

@Injectable()
export class FinderService implements AbstractFinderService {

  constructor(private _breedsService: SharedBreedsService) { }

  // Public
  loadBreeds(): Observable<IFinderBreeds> {
    return this._breedsService.getAllBreeds().pipe(switchMap(this._mapBreeds));
  }

  loadImages(path: string): Observable<string[]> {
    return this._breedsService.getBreedImage(path);
  }

  // Private
  _mapBreeds(breeds: IBreedsList): Observable<IFinderBreeds> {
    const mappedBreeds = Object.keys(breeds).reduce((accumulor: IFinderBreeds, key: string) => {
      const value = breeds[key];
      accumulor[key] = key;
      if (Array.isArray(value)) {
        value.forEach(subBreed => {
          const name = `${key} - ${subBreed}`;
          accumulor[name] = `${key}/${subBreed}`;
        });
      }
      return accumulor;
    }, {});
    return of(mappedBreeds);
  }

}
