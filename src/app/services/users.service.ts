import { Injectable } from '@angular/core';
 import { HttpClient } from '@angular/common/http';
 import { Observable } from 'rxjs';
import { students } from '../models/studentmodels';
import { NgForm } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient,private _snackBar: MatSnackBar) { }

  getdata() {
    return this.http.get('https://vikkisource.github.io/dummy_api/login_details.json');
  }
  getEmployeeList(): Observable<any> {
    return this.http.get('http://localhost:3000/employees');
  }
  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(`http://localhost:3000/employees/${id}`);
  }
  openSnackBar(message: string, action: string = 'ok') {
    this._snackBar.open(message, action, {
      duration: 1000,
      verticalPosition: 'top',
    });
  }

  addEmployee(data: any): Observable<any> {
    return this.http.post('http://localhost:3000/employees', data);
  }

  updateEmployee(id: number, data: any): Observable<any> {
    return this.http.put(`http://localhost:3000/employees/${id}`, data);
  }
}
