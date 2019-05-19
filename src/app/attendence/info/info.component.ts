import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
import { employee_service } from 'src/app/object_class/employee.service';
import { forEach } from '@angular/router/src/utils/collection';
import { pracownik } from 'src/app/object_class/pracownik.model';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit, OnChanges {
@Input() selectedEmployee: pracownik = null;
currentYear: number = 0;
currentMonth: number = 0;
currentDay: number = 0;
daysInMonth: number = 0;
calendar: [{day: string, status:string}] = [{day: null, status: null}];  
status: string = "Obecny";
date_start: Date = new Date();
date_end: Date = new Date();
constructor() { }

  ngOnInit() {
 
    this.currentYear = new Date().getFullYear();
    this.currentMonth = new Date().getMonth();
    this.currentDay = new Date().getDate();
    this.daysInMonth = new Date(this.currentYear, this.currentMonth+1, 0).getDate();  
 
    for(var x=1; x<=this.daysInMonth; x++) {
      if(x==1) {
        var dayInThisMonth = new Date(this.currentYear, this.currentMonth, 1).getDay();
        if(dayInThisMonth == 2) {
          this.calendar.push({day: "",status: ""});
        } else if(dayInThisMonth == 3) {
          this.calendar.push({day: "",status: ""});
          this.calendar.push({day: "",status: ""});
        } else if(dayInThisMonth == 4) {
          this.calendar.push({day: "",status: ""});
          this.calendar.push({day: "",status: ""});
          this.calendar.push({day: "",status: ""});
        } else if(dayInThisMonth == 5) {
          this.calendar.push({day: "",status: ""});
          this.calendar.push({day: "",status: ""});
          this.calendar.push({day: "",status: ""});
          this.calendar.push({day: "",status: ""});
        } else if(dayInThisMonth == 6) {
          this.calendar.push({day: "",status: ""});
          this.calendar.push({day: "",status: ""});
          this.calendar.push({day: "",status: ""});
          this.calendar.push({day: "",status: ""});
          this.calendar.push({day: "",status: ""});
        } else if(dayInThisMonth == 0) {
          this.calendar.push({day: "",status: ""});
          this.calendar.push({day: "",status: ""});
          this.calendar.push({day: "",status: ""});
          this.calendar.push({day: "",status: ""});
          this.calendar.push({day: "",status: ""});
          this.calendar.push({day: "",status: ""});
        } else {
        }
      }
    this.calendar.push({day: ""+x, status: ""});
    }

  }

  getEmplyee() {
    console.log(this.selectedEmployee);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("je");
    if(this.selectedEmployee != null) {
      var days = changes.selectedEmployee.currentValue.attendance_list.days;
      console.log(days);
      console.log(this.calendar);
        for(var i=0; i<days.length; i++) {
            for(var j=0; j<this.calendar.length; j++) {
              if(this.calendar[j].day == days[i].day && this.currentYear == days[i].year && this.currentMonth+1 == days[i].month) {
               this.calendar[j].status = "W pracy";
               this.calendar[j].day = "222";
               break;
              }  
            }
        }
    }
  }

  getColor(status: string) {
    var color = "white";
    if(status == "") {

    } else if(status == "wolne") {
      color = "orange";
    } else if(status == "nieobecny") {
      color="red";
    } else if(status == "l4") {
      color="purple";
    } else {
      //w pracy
      color="green";
    }
    return color;
  }
  

  changeStatus() {
    if(this.status == "" || this.date_start == null || this.date_start == new Date() || 
    this.date_end == null || this.date_end == new Date() || this.date_start > this.date_end) {
      console.log("Bladnie wprowadzone dane");

    } else {
      var date = this.date_start+"";
      var dat2 = date.split("-");
      var start = new Date(parseInt(dat2[0], 10), parseInt(dat2[1], 10)-1, parseInt(dat2[2], 10)+1);
      date = this.date_end+"";
      var dat2 = date.split("-");
      var end = new Date(parseInt(dat2[0], 10), parseInt(dat2[1], 10)-1, parseInt(dat2[2], 10)+1);
      
      
      
       while(start <= end) {
          console.log(start);
          start.setDate(start.getDate()+1);
          var isNew = true;


          for(var i=0; i<this.selectedEmployee.attendance_list.days.length; i++){
           
            if(parseInt(this.selectedEmployee.attendance_list.days[i].day, 10) == start.getDate()
              && parseInt(this.selectedEmployee.attendance_list.days[i].month, 10) == start.getMonth()+1
              && parseInt(this.selectedEmployee.attendance_list.days[i].year, 10) == start.getFullYear()) {
                this.selectedEmployee.attendance_list.days[i].status = this.status;
                isNew = false;
            }
          }
          if(isNew) {
            this.selectedEmployee.attendance_list.days.push({day: start.getDate()+"", month: start.getMonth()+1+"", year: start.getFullYear()+"", status: this.status});
          }

      } 
      console.log(this.selectedEmployee.attendance_list.days);

    }
  }

}
