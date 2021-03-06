import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApostarService, arrayData } from '../servicios/apostar.service';

@Component({
  selector: 'app-bet-split',
  templateUrl: './bet-split.component.html',
  styleUrls: ['./bet-split.component.scss']
})
export class BetSplitComponent implements OnInit {

  formulario: FormGroup;
  maxNumber: Array<arrayData> = [];
  numMultiplicar: number = 1;

  constructor(
    private formBuild: FormBuilder,
    public apostarSvc: ApostarService
  ) {
    this.formulario = this.formBuild.group({
      valorApostar: ['', [
        Validators.required, Validators.min(5), Validators.pattern('^-?[0-9]\\d*(\\.\\d{1,2})?$')
      ]]
    });

    console.log(this.formulario.get('valorApostar'))
  }

  ngOnInit(): void {
    this.apostarSvc.obtenerNumeros().subscribe((selecteds: Array<arrayData>) => {
      if (selecteds.length <= this.apostarSvc.maxNumApostar) {
        this.maxNumber = [...selecteds];
        for (let i = this.maxNumber.length; i < this.apostarSvc.maxNumApostar; i++) this.maxNumber.push({ numero: 0, color: '' });
      }
      if (!selecteds.length) {
        this.formulario.get('valorApostar')?.setValue(0);
        this.formulario.markAsUntouched();
        this.numMultiplicar = 1;
      }
    });

    this.formulario.get('valorApostar')?.valueChanges.subscribe(resp => {
      if (!isNaN(+resp)) {
        this.multiplicarValor();
      }
    });
  }

  multiplicarValor(sumar?: boolean) {
    sumar ? this.numMultiplicar++ : null;
    let valor = this.formulario.get('valorApostar')?.value * this.numMultiplicar;
    this.apostarSvc.valorApostar = valor;
  }

  jugar() {
    if (this.formulario.valid && this.apostarSvc.numerosApostar.length) {
      let numGanador = Math.floor((Math.random() * 10) + 1);
      let enc = this.apostarSvc.numerosApostar.find(it => it.numero == numGanador);
      this.apostarSvc.guardarGanador(enc ? [{ ...enc, ganador: true }] : [{ numero: numGanador, color: '#8f8f8f' }]);
    }
  }

  validarError() {
    let field = this.formulario.get('valorApostar');
    return !field ? false : (field?.invalid && field?.touched);
  }

  get formErrors() {
    return this.formulario.get('valorApostar') as FormArray
  }

}
