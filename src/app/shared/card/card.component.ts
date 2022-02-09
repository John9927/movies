import { Component, Input, OnInit } from '@angular/core';
import { IResult } from 'src/app/model/movie';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() movies: IResult = {} as IResult;

  constructor() { }

  ngOnInit(): void {
  }

}
