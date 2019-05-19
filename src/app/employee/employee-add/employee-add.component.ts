import { Component, OnInit, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Section } from 'src/app/object_class/section.module';
import { section_service } from 'src/app/object_class/section.service';
import { pracownik } from 'src/app/object_class/pracownik.model';
import { employee_service } from 'src/app/object_class/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {
  sectionsList: Section[] = [];
  employeeService2: employee_service = null;
  constructor(private sectionService: section_service, private employee_service1: employee_service, private router: Router) { }

  ngOnInit() {
    this.sectionsList = this.sectionService.sectionList;
    this.employeeService2 = this.employee_service1;
  }
  sumbitForm(form2: NgForm) {
    console.log(form2.form.value.firstname); 
    var selectedSection: Section = null;
    for(var i=0; i< this.sectionsList.length; i++) {
        if(this.sectionsList[i].name == form2.form.value.section) {
          selectedSection = this.sectionsList[i];
        }
    }

    var employee: pracownik = new pracownik(2, form2.form.value.firstname, form2.form.value.lastname, form2.form.value.birth, form2.form.value.pesel, form2.form.value.city, form2.form.value.street, selectedSection, form2.form.value.data_start, form2.form.value.price, form2.form.value.bonus_price, form2.form.value.free_day, null, form2.form.value.note);
    this.employeeService2.addEmployee(employee);
  console.log(this.employeeService2.employeeList)
   //window.location.href='';
  this.router.navigate(['']);
  }
 

}
