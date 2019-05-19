import { pracownik } from "./pracownik.model";
import { OnInit, Inject, Injectable } from "@angular/core";
import { section_service } from "./section.service";
import { Attendance_list } from "./attendance_list.module";

@Injectable()
export class employee_service implements OnInit {
    attendancy: Attendance_list = new Attendance_list();
    employeeList: pracownik[] = [
                                    new pracownik(1, 'Dawid', 'H', 25, 9876543, 'Wrocław', 'Mickiewicza', this.SectionService.sectionList[0], null, 3000, 200, 26, this.attendancy, 'Programista'),
                                    new pracownik(2, 'Al', 'Nowa', 25,  99999, 'Wrocław', 'Mickiewicza', this.SectionService.sectionList[1], null, 3000, 200, 26, new Attendance_list(), 'Administator sieci'),
                                    new pracownik(3, 'Anna', 'Nowak', 22,  93213, 'Wrocław', 'Mickiewicza', this.SectionService.sectionList[2], null, 3000, 200, 26,  new Attendance_list(), 'Programista'),
                                    new pracownik(4, 'Adam', 'Kowalski', 24,  912343, 'Wrocław', 'Mickiewicza', this.SectionService.sectionList[0], null, 3000, 200, 26,  new Attendance_list(), 'Budowlaniec')
                                ];

    constructor(private SectionService: section_service){}                            
    
    ngOnInit() {
        this.attendancy.addDay(2, 2, 2019,  "wolne");
        console.log(this.attendancy.days);
    }

    addEmployee(employee: pracownik) {
        var isEmployeeInArray = "no";
        for(var i=0;i<this.employeeList.length;i++) {
            if(this.employeeList[i].pesel == employee.pesel) {
                isEmployeeInArray = "yes";
            }
        }
        this.employeeList.push(employee);
    }
    
}