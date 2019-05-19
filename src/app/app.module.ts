import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { EmployeeComponent } from './employee/employee.component';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SectionComponent } from './section/section.component';
import { SectionInfoComponent } from './section/section-info/section-info.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { employee_service } from './object_class/employee.service';
import { section_service } from './object_class/section.service';
import { EmployeeInfoComponent } from './employee/employee-info/employee-info.component';
import { EmployeeAddComponent } from './employee/employee-add/employee-add.component';
import { Routes, RouterModule } from '@angular/router';
import { FilterPipe } from './object_class/filter.pipe';
import { AttendenceComponent } from './attendence/attendence.component';
import { ListComponent } from './attendence/list/list.component';
import { InfoComponent } from './attendence/info/info.component';

const appRoutes: Routes = [
                          {path: 'employee', component: EmployeeComponent},
                          {path: 'add_employee', component: EmployeeAddComponent},
                          {path: '', component: EmployeeComponent},
                          {path: 'section', component: SectionComponent},
                          {path: 'attendency', component: AttendenceComponent},
                          ];

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    HeaderComponent,
    SectionComponent,
    SectionInfoComponent,
    EmployeeListComponent,
    EmployeeInfoComponent,
    EmployeeAddComponent,
    FilterPipe,
    AttendenceComponent,
    ListComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [employee_service, section_service],
  bootstrap: [AppComponent]
})
export class AppModule { }
