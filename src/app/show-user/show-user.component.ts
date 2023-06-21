import { Component, ViewChild } from '@angular/core';
import { AddEditUserComponent } from '../add-edit-user/add-edit-user.component';
import { UsersService } from '../services/users.service';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { students } from '../models/studentmodels';

@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.scss']
})
export class ShowUserComponent {
  displayedColumns: string[] = [
    'id',
    'firstName',
    'email',
    'gender',
    'action'

  ];
   student:students[] = [];
   @ViewChild(MatPaginator) paginator!: MatPaginator;

   title = "firstapp";

 data:any;

 dataSource!: MatTableDataSource<any>;

constructor( private _users:UsersService, private http: HttpClient,private _dialog: MatDialog,){

}
ngOnInit(){
this.getEmployeeList();

}

  getEmployeeList() {
    this._users.getEmployeeList().subscribe({
      next: (student) => {
        this.dataSource = new MatTableDataSource(student);
           this.student = student as students[];
           this.dataSource.paginator = this.paginator;
      },
      error: console.log,
    });
  }
  deleteEmployee(id: number) {
    this._users.deleteEmployee(id).subscribe({
      next: (res) => {
        this._users.openSnackBar('Employee deleted!', 'done');
        this.getEmployeeList();
      },
      error: console.log,
    });
  }

  openEditForm(data: any) {
    const dialogRef = this._dialog.open(AddEditUserComponent, {
      data,
    });

    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getEmployeeList();
        }
      },
    });
  }

  openAddEditEmpForm() {
    const dialogRef = this._dialog.open(AddEditUserComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getEmployeeList();
        }
      },
    });
  }

}


