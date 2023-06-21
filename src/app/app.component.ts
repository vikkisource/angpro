import { AfterViewInit,Component, ViewChild } from '@angular/core';
import { UsersService } from './services/users.service';
import { students } from './models/studentmodels';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AddEditUserComponent } from './add-edit-user/add-edit-user.component';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title:string = 'User Management';

}
