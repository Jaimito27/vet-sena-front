import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.scss']
})
export class UsersFormComponent implements OnInit {

  public formCreateUser!: FormGroup;
constructor(
  private formBuilder: FormBuilder,
  private dialogRef: MatDialogRef<UsersFormComponent>
){}

ngOnInit(): void {
    this.formCreateUser = this.formBuilder.group({})
}

}
