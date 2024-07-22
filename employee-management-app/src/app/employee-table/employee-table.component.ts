import { Component, NgModule, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../../models/employee';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'employee-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-table.component.html',
  styleUrl: './employee-table.component.scss',
})


export class EmployeeTableComponent implements OnInit {
  employees: Employee[] = [];
  
  constructor(
    private es: EmployeeService) {}

  ngOnInit(): void {
    this.getEmployeeDataService();
  }



  getEmployeeDataService() {
    this.es.getEmployees().subscribe((res:Employee[]) => {
      console.log(res);
      this.employees = res;

    });
  }

  // addEmployee(data: Employee)
  // {
  //   this.es.(data).subscribe({
  //     next: () => {
  //       thid
  //     }
  //   })

  // }


}
