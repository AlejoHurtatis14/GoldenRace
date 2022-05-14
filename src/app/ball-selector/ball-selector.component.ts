import { Component, OnInit } from '@angular/core';
import { ApostarService } from '../servicios/apostar.service';

@Component({
  selector: 'app-ball-selector',
  templateUrl: './ball-selector.component.html',
  styleUrls: ['./ball-selector.component.scss']
})
export class BallSelectorComponent implements OnInit {

  maxNumber: Array<number> = new Array(10);

  constructor(
    private apostarSvc: ApostarService
  ) { }

  ngOnInit(): void {
  }

  agregar(numero: number) {
    this.apostarSvc.agregarValor(numero);
  }

}
