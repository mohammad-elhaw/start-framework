import { Component } from '@angular/core';
import { LineBreakComponent } from "../line-break/line-break.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LineBreakComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
