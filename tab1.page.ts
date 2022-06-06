import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}
  
  public opcoes = [
    {'Titulo': 'Teste', 'active': true},
    {'Titulo': 'Teste2', 'active': false},
    {'Titulo': 'Teste 3', 'active': false}
  ]

  status(a: number){
    if(this.opcoes[a].active === false){
      this.opcoes.forEach(elem => {
        elem.active = false;
      })
      this.opcoes[a].active = true;
    }else{
      this.opcoes[a].active = false;
    }
  }
  
  /*status(ev){
    console.log(ev);
  }*/
}
