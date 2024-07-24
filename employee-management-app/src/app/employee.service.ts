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

  getEmployeeById(id: number): Observable<Employee>
  {
      return this.http.get<Employee>(`${this.apiUrl}/get-employee-by-id?id=${id}`);
  }

  createEmployee(data: Employee) : Observable<Employee>
  {
    return this.http.post<Employee>(this.apiUrl + "/add-employee", data);
  }

  updateEmployee(data :  Employee): Observable<Employee>
  {
    return this.http.put<Employee>(this.apiUrl + "/update-employee",data);
  }

  deleteEmployee(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/delete-employee?id=${id}`);
  }
}
