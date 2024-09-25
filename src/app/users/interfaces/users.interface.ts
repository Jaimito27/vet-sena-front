import { RegisterUser } from 'src/app/auth/interfaces/register.interface';
import { Pet } from 'src/app/pets/interfaces/pet.interface';

export interface Users extends RegisterUser {

pets: Pet[]
}
