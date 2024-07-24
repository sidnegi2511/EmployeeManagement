import { Component, OnInit } from '@angular/core';
import { FormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Employee } from '../../models/employee';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'employee-form',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.scss',
})
export class EmployeeFormComponent implements OnInit{
  form: Employee = {
    id: 0,
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    position: '',
  };

  errorMessage: string = "";
  isEditing: boolean = false;
  constructor(
    private fb: UntypedFormBuilder,
     private es: EmployeeService,
     private router: Router,
     private route: ActivatedRoute,
  ) {}

    ngOnInit(): void {
      this.route.paramMap.subscribe((res) =>{
        console.log(res);
        const id = res.get('id');
        if(id) {
          this.isEditing = true;
          this.es.getEmployeeById( Number(id)).subscribe({
            next: (res) => {
              this.form = res;
            },
            error: (err) => {
              this.errorMessage = err;
            }
        })
        }
        else this.isEditing = false
      })
    }

  CreateForm() {
    // this.form = this.fb.group({
    // });
  }

  onSubmit(): void {
    if(!this.isEditing)
    {
      this.es.createEmployee(this.form).subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(["/"]);
        },
        error: (err) => {
          this.errorMessage = `Error Ocurred: + ${err.status} - ${err.message}`;
          console.log(err);
        },
      });
    }
    else{
      this.es.updateEmployee(this.form).subscribe({
        next: (res) =>{
          this.router.navigate(["/"]);
        },
        error: (err) => {
          this.errorMessage = `Error Ocurred: + ${err.status} - ${err.message}`;
        }
      })
    }
    
  }
}
