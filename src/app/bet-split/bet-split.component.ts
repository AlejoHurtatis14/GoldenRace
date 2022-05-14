import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApostarService } from '../servicios/apostar.service';

@Component({
  selector: 'app-bet-split',
  templateUrl: './bet-split.component.html',
  styleUrls: ['./bet-split.component.scss']
})
export class BetSplitComponent implements OnInit {

  form!: FormGroup;
  maxNumApostar = 8;
  maxNumber: Array<number> = [];
  numMultiplicar: number = 1;

  constructor(
    private formBuild: FormBuilder,
    public apostarSvc: ApostarService
  ) { }

  ngOnInit(): void {
    this.form = this.formBuild.group({
      valorApostar: ['', [Validators.required]]
    });

    this.apostarSvc.obtenerNumeros().subscribe((selecteds: Array<number>) => {
      if (selecteds.length <= this.maxNumApostar) {
        this.maxNumber = [...selecteds];
        for (let i = this.maxNumber.length; i < this.maxNumApostar; i++) this.maxNumber.push(0);
      }
    });
  }

  multiplicarValor() {
    this.numMultiplicar++;
    let valor = this.form.get('valorApostar')?.value * this.numMultiplicar;
    this.apostarSvc.valorApostar = valor;
  }

  jugar() {
    if (this.form.valid) {
      this.multiplicarValor();
    }
  }

}
