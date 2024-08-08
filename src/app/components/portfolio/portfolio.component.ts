import { Component } from '@angular/core';
import { LineBreakComponent } from "../line-break/line-break.component";

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [LineBreakComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  imgSrc:string = "";
  modalActive:boolean = false;

  modalHelper(img:HTMLImageElement):void{
    const fullPath = img.src;
    const startIdx = fullPath.indexOf("/assets");
    if(startIdx != -1){
      this.imgSrc = fullPath.substring(startIdx);
      this.modalActive = true;
    } 
  }

  closeModal():void{
    this.modalActive = false;
  }

  preventClose(event:MouseEvent):void{
    event.stopPropagation();
  }
}
