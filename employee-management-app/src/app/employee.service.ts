import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {


  // private apiUrl = 'https://localhost:44301/api'
  private apiUrl = `${environment.apiUrl}` 

  constructor(private http: HttpClient) {
  }

  getEmployees(): Observable<Employee[]>
  {
      return this.http.get<Employee[]>(this.apiUrl + '/get-all-employees')
  }

  createEmployee(data: Employee) : Observable<Employee>
  {
    return this.http.post<Employee>(this.apiUrl + "/add-employee", data);
  }
}
