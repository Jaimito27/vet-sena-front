import { Component, Input } from '@angular/core';
import { Pet } from 'src/app/pets/interfaces/pet.interface';

@Component({
  selector: 'app-locked-user',
  templateUrl: './locked.component.html',
  styleUrls: ['./locked.component.scss']
})
export class LockedUsersComponent {


pets: Pet[]=[]

}
