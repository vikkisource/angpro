import { Component,Inject} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-add-edit-user',
  templateUrl: './add-edit-user.component.html',
  styleUrls: ['./add-edit-user.component.scss']
})
export class AddEditUserComponent {
  empForm: FormGroup;
  maxDate: Date;
  education: string[] = [
    'Matric',
    'Diploma',
    'Intermediate',
    'Graduate',
    'Post Graduate',
  ];
  gender: string[] = ['male', 'female', 'others'];
  constructor(
    private _fb: FormBuilder,
    private _user: UsersService,
    private _dialogRef: MatDialogRef<AddEditUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any

  ) {

    this.maxDate = new Date();
    this.empForm = this._fb.group({
      firstName: '',
      lastName: '',
      email: '',
      gender:''


    });
  }

  ngOnInit(): void {
    this.empForm.patchValue(this.data);
    console.log(this.maxDate);
  }

  onFormSubmit() {
    if (this.empForm.valid) {
      if (this.data) {
        this._user
          .updateEmployee(this.data.id, this.empForm.value)
          .subscribe({
            next: (val: any) => {
              this._user.openSnackBar('Employee detail updated!');
              this._dialogRef.close(true);
            },
            error: (err: any) => {
              console.error(err);
            },
          });
      } else {
        this._user.addEmployee(this.empForm.value).subscribe({
          next: (val: any) => {
            this._user.openSnackBar('Employee added successfully');
            this._dialogRef.close(true);
          },
          error: (err: any) => {
            console.error(err);
          },
        });
      }
    }
  }
}
