import { Component, OnInit } from '@angular/core';
import { ApostarService, arrayData } from '../servicios/apostar.service';

@Component({
  selector: 'app-ball-selector',
  templateUrl: './ball-selector.component.html',
  styleUrls: ['./ball-selector.component.scss']
})
export class BallSelectorComponent implements OnInit {

  maxNumber: Array<number> = new Array(10);
  verResultado: string = '';

  constructor(
    public apostarSvc: ApostarService
  ) { }

  ngOnInit(): void {
    this.apostarSvc.obtenerGanador().subscribe(resp => {
      if (resp[0] && resp[0].ganador) {
        this.verResultado = 'G';
      } else if (resp.length) {
        this.verResultado = 'P';
      }
    });
  }

  agregar(numero: number) {

    if (this.apostarSvc.maxNumApostar == this.apostarSvc.numerosApostar.length) return

    let enc = this.apostarSvc.numerosApostar.find(it => it.numero == numero);
    let datos: arrayData = {
      numero, color: enc ? enc.color : this.generateRandomColor()
    };
    this.apostarSvc.agregarValor(datos);
  }

  generateRandomColor() {
    let letters = 'BCDEF'.split('');
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color;
  }

  buscarColor(numero: number) {
    let enc = this.apostarSvc.numerosApostar.find(it => it.numero == numero);
    return enc?.color || '#e3e3e3'
  }

  reiniciarJuego() {
    this.verResultado = '';
    this.apostarSvc.limpiarValores();
  }

}
