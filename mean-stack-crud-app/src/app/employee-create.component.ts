import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/sevice/api.service';


@Component({
  selector: 'app-employee-create',
  templateUrl: './employee-create.component.html',
  styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {
  submitted = false;
  employeeForm!: FormGroup;
  EmployeeProfile: any = ['Finance', 'HR', 'Sales', 'Admin']

  constructor(
    private router: Router,
    public apiService: ApiService
  ) {  }

  ngOnInit(): void {
      this.employeeForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      designation: new FormControl('', [Validators.required]),
      phoneNumber: new FormControl('', [Validators.required])

    });
  }
  get myForm(){
    return this.employeeForm.controls;
  }
  onSubmit(){
    this.submitted = true;
    this.apiService.createEmployee(this.employeeForm.value).subscribe(
      (res) => {
        alert('Employee successfully created!');
         this.router.navigateByUrl('/employees-list')
      }, (error) => {
        console.log(error);
      });

    //console.log(this.employeeForm.value);
  }

}



