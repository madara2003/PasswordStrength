import { Component, Input, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-groupsection',
  templateUrl: './groupsection.component.html',
  styleUrl: './groupsection.component.css'
})
export class GroupsectionComponent implements OnChanges {
  sectionOneColor:string = "gray";
  sectionTwoColor:string = "gray";
  sectionThreeColor:string = "gray";

  @Input() sectionValue!:number 

  ngOnChanges(changes: SimpleChanges): void {
   let sectionNumber = changes["sectionValue"]
   if (changes["sectionValue"] && changes["sectionValue"].currentValue !== changes["sectionValue"].previousValue) {
    this.observeDataChanges(this.sectionValue);

   }
   console.warn(sectionNumber)
  }
  observeDataChanges(data: number) {
    if (data === 0) {
      this.sectionOneColor = "gray";
      this.sectionTwoColor = "gray";
      this.sectionThreeColor = "gray";
    }else if (data === 1) {
      this.sectionOneColor = "red";
      this.sectionTwoColor = "red";
      this.sectionThreeColor = "red";
    }else if (data === 2) {
      this.sectionOneColor = "green";
      this.sectionTwoColor = "green";
      this.sectionThreeColor = "green";
    }else if (data === 3) {
      this.sectionOneColor = "yellow";
      this.sectionTwoColor = "yellow";
      this.sectionThreeColor = "gray";
    }else if (data === 4) {
      this.sectionOneColor = "red";
      this.sectionTwoColor = "gray";
      this.sectionThreeColor = "gray";
    } 
  }
}
