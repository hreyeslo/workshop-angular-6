import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { EExampleActions, api } from './example.state';
import { map, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ExampleEffects {

	// Crear el effect necesario para recuperar la información del api

	getUser$ = createEffect(() =>
		this._actions$.pipe(
			ofType(EExampleActions.GET_USER),
			switchMap(() => this._httpService.get(api).pipe(
				map((response: any) => ({type: EExampleActions.GET_USER_OK, payload: response.data}))
			))
		)
	);

	constructor(private _actions$: Actions, private _httpService: HttpClient) {}
}
