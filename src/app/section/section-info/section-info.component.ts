import { Component, OnInit, Input } from '@angular/core';
import { Section } from 'src/app/object_class/section.module';
import { employee_service } from 'src/app/object_class/employee.service';
import { pracownik } from 'src/app/object_class/pracownik.model';

@Component({
  selector: 'app-section-info',
  templateUrl: './section-info.component.html',
  styleUrls: ['./section-info.component.css']
})
export class SectionInfoComponent implements OnInit {
@Input() selectedSection: Section;
employeeInSection: pracownik[] = [];
  constructor(private EmployeeService: employee_service) { }

  ngOnInit() {
    this.employeeInSection = this.EmployeeService.employeeList;
  }

}
