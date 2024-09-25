import { Component } from '@angular/core';
import { Pet } from 'src/app/pets/interfaces/pet.interface';

@Component({
  selector: 'app-active-employee',
  templateUrl: './active-employee.component.html',
  styleUrls: ['./active-employee.component.scss']
})
export class ActiveEmployeeComponent {

pets: Pet[]  = []
}
