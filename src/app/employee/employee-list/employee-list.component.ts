import { Component, OnInit, Output } from '@angular/core';
import { Section } from 'src/app/object_class/section.module';
import { pracownik } from 'src/app/object_class/pracownik.model';
import { employee_service } from 'src/app/object_class/employee.service';
import { section_service } from 'src/app/object_class/section.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
  sectionsList: Section[] = null;
  emploayeeList: pracownik[] = null;   
  @Output() selectEmployee1 = new EventEmitter<number>();
   
  constructor(private employeeService: employee_service, private sectionService: section_service) { }

  ngOnInit() {
    this.emploayeeList = this.employeeService.employeeList;
    this.sectionsList = this.sectionService.sectionList;
    console.log(this.emploayeeList)
  }

  changeSectionFilter(sectionName: string) {
    console.log(sectionName);
    if(sectionName == "wszyscy") {
      this.emploayeeList = this.employeeService.employeeList;
    } else {
    this.emploayeeList = [];
    for(var i = 0; i< this.employeeService.employeeList.length; i++) {
      if(this.employeeService.employeeList[i].section.name == sectionName) {
        this.emploayeeList.push(this.employeeService.employeeList[i]);
      }
    }
  }
}

selectEmployee(index: number) {
  //this.selectEmployee1.emit(this.emploayeeList[index]);
  this.selectEmployee1.emit(index);
}
}
