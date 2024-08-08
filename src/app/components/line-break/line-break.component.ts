import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-line-break',
  standalone: true,
  imports: [],
  templateUrl: './line-break.component.html',
  styleUrl: './line-break.component.css'
})
export class LineBreakComponent {
  @Input() bgColor!:string;
}
