export class Attendance_list {
    //days: [{day: string, status: string}] = null;
    days: [{day: string, month: string, year: string, status: string}] = [{day: "20", month: "2", year: "2019", status: "wolne"}];

    constructor() {}

    addDay(day, month, year, stat) {
        this.days.push({day: day, month: month, year: year, status: stat});
    }
}