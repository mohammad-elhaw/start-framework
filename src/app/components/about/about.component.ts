import { Component } from '@angular/core';
import { LineBreakComponent } from "../line-break/line-break.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [LineBreakComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

}
