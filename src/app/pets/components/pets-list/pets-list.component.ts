import { Component, EventEmitter, Input } from '@angular/core';
import { Pet } from '../../interfaces/pet.interface';

@Component({
  selector: 'pets-pets-list',
  templateUrl: './pets-list.component.html',
  styleUrls: ['./pets-list.component.scss'],
})
export class PetsListComponent {

  @Input() showButtons: boolean = true;

  pets: Pet[] = [];
}
