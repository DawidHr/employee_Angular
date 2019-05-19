import { Component, OnInit } from '@angular/core';
import { pracownik } from '../object_class/pracownik.model';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employeeList: pracownik[] = [
    new pracownik(1, 'Dawid', 'H', 25, 9876543, 'Wrocław', 'Mickiewicza', null, null, 3000, 200, 26, null, 'Programista: Java, Angular, PHP, Magento'),
    new pracownik(2, 'Al', 'Nowa', 25,  9876543, 'Wrocław', 'Mickiewicza', null, null, 3000, 200, 26, null, 'Administator sieci'),
    new pracownik(3, 'Anna', 'Nowak', 22,  9876543, 'Wrocław', 'Mickiewicza', null, null, 3000, 200, 26, null, 'Modelka'),
    new pracownik(4, 'Adam', 'Kowalski', 24,  9876543, 'Wrocław', 'Mickiewicza', null, null, 3000, 200, 26, null, 'Budowlaniec')
  ];
  selectedEmployee: pracownik = null;

  constructor() { }

  ngOnInit() {
  }

  selectEmployee(index: number) {
    this.selectedEmployee = this.employeeList[index];
  }

}
