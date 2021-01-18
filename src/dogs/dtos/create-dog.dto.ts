import { Dog } from "../interfaces/dog.interface";

export class CreateDogDto implements Dog {
    id: number;
    name: string;
    age: number;
    breed: string;
}

export class UpdateDogDto {
    id: number;
    name: string;
    age: number;
    breed: string;
}

