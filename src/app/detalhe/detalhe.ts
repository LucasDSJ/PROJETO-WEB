import { Component } from '@angular/core';
import { Produto } from '../model/produto';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';

@Component({
  imports: [CommonModule],
  selector: 'app-detalhe',
  styleUrl: './detalhe.css',
  templateUrl: './detalhe.html',
})

export class Detalhe {
  constructor(private location: Location) {}

    obj:Produto = new Produto();
    //evento apos o componente ser carregado
    ngOnInit(){
      let json = localStorage.getItem("produto");
      if(json!=null){
        this.obj = JSON.parse(json);
      } else {
        location.href="./vitrine";
      }
    }
 voltar(): void {
  this.location.back();
} 
}
