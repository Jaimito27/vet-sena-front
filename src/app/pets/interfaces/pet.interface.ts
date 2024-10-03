import { Users } from "src/app/users/interfaces/users.interface";

export interface Pet {
  name: string;
  age: number;
  type: string;
  breed: string;
  dangerous: boolean;
  ident_document: string; //relacion con el usuario al cual se le va crear la mascota
  gender: string;
  user: Users;
}
