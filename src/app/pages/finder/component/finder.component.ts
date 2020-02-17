import { Observable, of, Subscription, forkJoin, Subject } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { skipWhile, switchMap, tap } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';
import { Store } from '@ngrx/store';
// UI
import { SelectItems, ISelectLiterals } from '../../../../../projects/select/src/public-api';
import { IPhotoLiterals } from '../../../../../projects/photo/src/public-api';
// Component parts
import { selectBreeds, selectBreedImages } from '../store/finder.selectors';
import { loadBreeds, loadBreedImages } from '../store/finder.actions';
import { IFinderBreeds } from '../models/finder.model';

@Component({
  selector: 'dogs-finder',
  templateUrl: './finder.component.html',
  styleUrls: ['./finder.component.scss']
})
export class FinderComponent implements OnInit, OnDestroy {

  private readonly _subscriptions: Subscription[] = [];

  selectLiterals$: Subject<ISelectLiterals> = new Subject<ISelectLiterals>();
  photoLiterals$: Subject<IPhotoLiterals> = new Subject<IPhotoLiterals>();

  breeds$: Observable<SelectItems>;
  breedImages$: Observable<string[]>;

  initialState = true;
  currentPath: string;
  loading: boolean;

  constructor(
    private _tranlsateService: TranslateService,
    private _store: Store
  ) {}

  ngOnInit(): void {
    this._loadLiterals();
    this._loadResources();
  }

  fetchImages(path: string): void {
    if (this.initialState) {
      this.initialState = false;
    }
    this.loading = true;
    this.currentPath = path;
    this._store.dispatch(loadBreedImages(path));
  }

  // Private
  _loadLiterals() {
    const literalsSubscription = this._tranlsateService.onLangChange
      .pipe(switchMap(() => forkJoin([
        this._tranlsateService.get('select'),
        this._tranlsateService.get('photo')
      ])))
      .subscribe(([selectLiterals, photoLiterals]) => {
        this.selectLiterals$.next(selectLiterals);
        this.photoLiterals$.next(photoLiterals);
      });
    this._subscriptions.push(literalsSubscription);
  }

  _loadResources() {
    this._store.dispatch(loadBreeds());
    this.breeds$ = this._store.select(selectBreeds).pipe(
      skipWhile<IFinderBreeds>(this._skipEmpty),
      switchMap(this._mapSelectItems)
    );
    this.breedImages$ = this._store.select(selectBreedImages).pipe(
      tap(() => this.loading = false),
      skipWhile<string[]>(this._skipEmpty)
    );
  }

  _skipEmpty(items: IFinderBreeds | string[] = []): boolean {
    return (Array.isArray(items) ? items : Object.keys(items)).length === 0;
  }

  _mapSelectItems(breeds: IFinderBreeds = {}): Observable<SelectItems> {
    return of(Object.keys(breeds).map(breedKey => ({name: breedKey, value: breeds[breedKey]})));
  }

  ngOnDestroy() {
    this._subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
