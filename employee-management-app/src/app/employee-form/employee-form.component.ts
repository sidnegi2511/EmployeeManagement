import { Component } from '@angular/core';
import { FormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Employee } from '../../models/employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'employee-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.scss'
})
export class EmployeeFormComponent {

  form:  Employee = {
    id: 0,
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    position: ''
  }

  constructor(
    private fb: UntypedFormBuilder,
    private es: EmployeeService
  ) {
    
  }
  

  CreateForm()
  {

    // this.form = this.fb.group({
      
    // });
   
  }

  onSubmit(): void {
    console.log(this.form);
    this.es.createEmployee(this.form).subscribe((res)=>{
      console.log(res);
    })
  }

}
