import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface arrayData {
  numero: number,
  color: string,
  ganador?: boolean
}

@Injectable({
  providedIn: 'root'
})
export class ApostarService {

  maxNumApostar: number = 8;
  ganador: Array<arrayData> = [];
  numerosApostar: Array<arrayData> = [];
  private disparador = new BehaviorSubject<Array<arrayData>>([]);
  private dispararGanador = new BehaviorSubject<Array<arrayData>>([]);
  valorApostar: number = 0;

  constructor() { }

  agregarValor(valor: arrayData) {
    this.numerosApostar.push(valor);
    this.disparador.next(this.numerosApostar);
  }

  limpiarValores() {
    this.numerosApostar = [];
    this.disparador.next(this.numerosApostar);
    this.ganador = [];
    this.dispararGanador.next(this.ganador);
    this.valorApostar = 0;
  }

  guardarGanador(ganador: Array<arrayData>) {
    this.ganador = ganador;
    this.dispararGanador.next(this.ganador);
  }

  obtenerNumeros() {
    return this.disparador;
  }

  obtenerGanador() {
    return this.dispararGanador;
  }

}
