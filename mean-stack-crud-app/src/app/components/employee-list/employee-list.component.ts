import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/sevice/api.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  Employee:any = [];
  constructor(public apiService: ApiService,private router :Router) {
    this.readEmployee();
  }

  ngOnInit(): void {
  }
  readEmployee(){
    /* this.apiService.getEmployees().subscribe((data) => {
     console.log(data);
    }) */
    this.apiService.getEmployees().subscribe((data)=>{
      this.Employee=data;
    })
  }
  removeEmployee(id:any,index:any){

    if(window.confirm("Are Sure to Delete.?")){
        this.apiService.deleteEmploye(id).subscribe((data)=>{
          alert("Record deleted successfully");
          //console.log(data);
          this.Employee.splice(index, 1);
      })

    }


  }

}
