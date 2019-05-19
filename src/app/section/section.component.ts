import { Component, OnInit } from '@angular/core';
import { Section } from '../object_class/section.module';
import { section_service } from '../object_class/section.service';


@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {
  sectionInfo: Section = null;
  addSection: string = "";
  sectionList: Section[] = null;
  constructor(private sectionService: section_service) { }

  ngOnInit() {
    this.sectionList = this.sectionService.sectionList;
  }

  addNewSection() {
    var isSectionInArray = "no";
    if(this.addSection != "") {
      for(var i=0;i<this.sectionList.length;i++) {
        if(this.sectionList[i].name == this.addSection) {
          isSectionInArray = "yes";
        }
      }
      if(isSectionInArray == "no") {
        this.sectionList.push(new Section(this.sectionList.length+1, this.addSection));
      }
      
     
    }
  }
  selectSection(i: number) {
    console.log("Wybrano sekcje: "+this.sectionList[i].name);
    this.sectionInfo=this.sectionList[i];
  }

}
