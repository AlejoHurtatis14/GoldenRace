import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApostarService {

  ganador: Array<number> = [];
  numerosApostar: Array<number> = [];
  private disparador = new BehaviorSubject<Array<number>>([]);
  valorApostar: number = 0;

  constructor() { }

  agregarValor(valor: number) {
    this.numerosApostar.push(valor);
    this.disparador.next(this.numerosApostar);
  }

  limpiarValores() {
    this.numerosApostar = [];
    this.obtenerNumeros();
  }

  guardarGanador(ganador: Array<number>) {
    this.ganador = ganador;
  }

  obtenerNumeros() {
    return this.disparador;
  }

}
