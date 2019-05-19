import { Section } from "./section.module";

export class section_service {
    sectionList: Section[] = [ 
                                new Section(1, "Programista"), new Section(2, "Administratorzy"), new Section(3, "HR"),
                                new Section(4, "Kierownictwo"), new Section(5, "Stażyści"), new Section(6, "Inni")
                            ]; 
}