import { Component, OnInit, Output } from '@angular/core';
import { section_service } from 'src/app/object_class/section.service';
import { Section } from 'src/app/object_class/section.module';
import { employee_service } from 'src/app/object_class/employee.service';
import { pracownik } from 'src/app/object_class/pracownik.model';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
sections: Section[] = [];
emploayeeList: pracownik[] = null;   
@Output() selectEmployee2 = new EventEmitter<number>();

  constructor(private sectionList : section_service, private employeeService: employee_service) { }

  ngOnInit() {
    this.sections = this.sectionList.sectionList;
    this.emploayeeList = this.employeeService.employeeList;
  }

  changeSectionFilter(sectionName: string) {
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
  this.selectEmployee2.emit(index);
}


}
