import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bet-split',
  templateUrl: './bet-split.component.html',
  styleUrls: ['./bet-split.component.scss']
})
export class BetSplitComponent implements OnInit {

  maxNumber: Array<number> = new Array(8);

  constructor() { }

  ngOnInit(): void {
  }

}
