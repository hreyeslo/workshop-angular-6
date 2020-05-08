export interface Istate {
	id: number;
	email: string;
	first_name: string;
	last_name: string;
	avatar: string;
}

export const api = 'https://reqres.in/api/users/2';

export enum EExampleActions {
	GET_USER = '[Example] Get user',
	GET_USER_OK = '[Example] Get user ok',
}
