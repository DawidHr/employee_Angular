import { Section } from "./section.module";
import { Attendance_list } from "./attendance_list.module";

export class pracownik {
    public id: number;
    public name: string;
    public name2: string;
    public age: number;
    public pesel: number;
    public city: string;
    public street: string;
    public section: Section;
    public data_start: Date;
    public money: number;
    public bonus_money: number;
    public free_days: number;
    public attendance_list: Attendance_list;
    public description: string;


    constructor(id: number, name: string, name2: string, age: number, pesel: number, city: string, street: string,
        section: Section, data_start: Date, money: number, bonus_money: number, free_days: number,  attendance_list: Attendance_list,
         description: string) {
        this.id=id;
        this.name=name;
        this.name2=name2;
        this.age=age;
        this.pesel=pesel;
        this.city=city;
        this.street=street;
        this.section=section;
        this.data_start=data_start;
        this.money=money;
        this.bonus_money=bonus_money;
        this.free_days = free_days;
        this.attendance_list=attendance_list;
        this.description=description;
    }
}