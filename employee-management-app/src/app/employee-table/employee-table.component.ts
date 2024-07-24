import { Component, NgModule, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../../models/employee';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'employee-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-table.component.html',
  styleUrl: './employee-table.component.scss',
})
export class EmployeeTableComponent implements OnInit {
  employees: Employee[] = [];

  constructor(private es: EmployeeService, private router: Router) {}

  ngOnInit(): void {
    this.getEmployeeDataService();
  }

  getEmployeeDataService() {
    this.es.getEmployees().subscribe((res: Employee[]) => {
      console.log(res);
      this.employees = res;
    });
  }

  deleteEmployee(id: number): void {
    this.es.deleteEmployee(id).subscribe({
      next: (res) => {
        console.log('deleted the data');
        this.getEmployeeDataService();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  updateEmployee(id: Number): void {
    this.router.navigate(['/edit',id]);
  }
}
