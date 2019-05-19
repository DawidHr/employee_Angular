import { Component, OnInit, Input, NgModule  } from '@angular/core';
import { employee_service } from 'src/app/object_class/employee.service';
import { pracownik } from 'src/app/object_class/pracownik.model';

@Component({
  selector: 'app-employee-info',
  templateUrl: './employee-info.component.html',
  styleUrls: ['./employee-info.component.css']
})
export class EmployeeInfoComponent implements OnInit {
  employee: pracownik =  new pracownik(1, 'Dawid', 'H', 25, 9876543, 'Wrocław', 'Mickiewicza', null, null, 3000, 200, 26, null, 'Programista');
  @Input() selectedEmployee = null;
  constructor(private EmployeeService: employee_service) { }

  ngOnInit() {
  }
   

}
