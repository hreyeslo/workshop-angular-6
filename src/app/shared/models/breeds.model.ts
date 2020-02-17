export interface IBreedsList {
  [key: string]: string[];
}

export interface IBreedsResponse {
  message: IBreedsList;
  status: string;
}
