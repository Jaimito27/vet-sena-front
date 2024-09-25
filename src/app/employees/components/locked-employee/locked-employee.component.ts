import { Component } from '@angular/core';
import { Pet } from 'src/app/pets/interfaces/pet.interface';

@Component({
  selector: 'app-locked-employee',
  templateUrl: './locked-employee.component.html',
  styleUrls: ['./locked-employee.component.scss']
})
export class LockedEmployeeComponent {

pets: Pet[] = []

}
