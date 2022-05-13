import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ball-selector',
  templateUrl: './ball-selector.component.html',
  styleUrls: ['./ball-selector.component.scss']
})
export class BallSelectorComponent implements OnInit {

  maxNumber: Array<number> = new Array(10);

  constructor() { }

  ngOnInit(): void {
  }

}
