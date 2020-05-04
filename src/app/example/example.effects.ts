import { Actions, createEffect, ofType } from '@ngrx/effects';
import { switchMap, catchError, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable()
export class ExampleEffects {

  // Crear el effect necesario para recuperar la información del api

  constructor(private _actions$: Actions) {}
}
