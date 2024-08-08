import { Component } from '@angular/core';
import { LineBreakComponent } from "../line-break/line-break.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [LineBreakComponent, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  userNameValue:string = "";
  userAgeValue:string = "";
  userEmailValue:string = "";
  userPasswordValue:string = "";
}
