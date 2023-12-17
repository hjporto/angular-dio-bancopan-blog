import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  standalone: true,
  imports: [],
  templateUrl: './small-card.component.html',
  styleUrl: './small-card.component.css'
})
export class SmallCardComponent {
  @Input()
  photoCover: string = "../../../assets/myimages/star.jpg"
  @Input()
  cardTitle: string = ""
  @Input()
  cardDescription: string = ""

}
