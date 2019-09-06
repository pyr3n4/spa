import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styles: []
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe: any = {};
  @Input() index: number;

  constructor() { }

  ngOnInit() {
  }

  verHeroe(){
    // tslint:disable-next-line: no-trailing-whitespace
    console.log( this.index );
  }

}
