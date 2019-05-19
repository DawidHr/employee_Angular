import { Component, OnInit } from '@angular/core';
import { pracownik } from '../object_class/pracownik.model';
import { employee_service } from '../object_class/employee.service';

@Component({
  selector: 'app-attendence',
  templateUrl: './attendence.component.html',
  styleUrls: ['./attendence.component.css']
})
export class AttendenceComponent implements OnInit {

  selectedEmployee: pracownik = null;
  constructor(private employee_service: employee_service) { }

  ngOnInit() {
  }
  selectEmployee(index: number) {
    for(var i =0; i < this.employee_service.employeeList.length; i++) {
      if(this.employee_service.employeeList[i].pesel == index) {
        this.selectedEmployee = this.employee_service.employeeList[i];
        break;
      }
    }
  }
}
