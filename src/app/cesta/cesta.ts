import { Component } from '@angular/core';
import { ItemCesta } from '../model/item-cesta';
import { CommonModule } from '@angular/common';

@Component({
  imports: [CommonModule],
  selector: 'app-cesta',
  styleUrl: './cesta.css',
  templateUrl: './cesta.html',
})
export class Cesta {
  mensagem: string = "";
  valorCesta: number = 0;

  lista: ItemCesta[] = [
    {
        "produto": {
            "codigo": 1,
            "nome": "Camiseta Donnie Darko",
            "descritivo": "Camiseta azul marinho com estampa do filme Donnie Darko.",
            "valor": 39.90,
            "valorPromo": 0,
            "quantidade": 25,
            "destaque": 1,
            "keywords": "filme, estampa, estampado, azul, donnie darko"
        },
        "qtd": 1,
        "valorTotal": 39.90
    },

    {
        "produto": {
            "codigo": 2,
            "nome": "Camiseta Seinfield",
            "descritivo": "Camiseta bege com estampa inspirada na série Seinfield.",
            "valor": 39.90,
            "valorPromo": 0,
            "quantidade": 40,
            "destaque": 0,
            "keywords": "série, estampa, estampado, bege, seinfield, comédia, sitcom"
        },
        "qtd": 1,
        "valorTotal": 39.90
    },

    {
        "produto": {
            "codigo": 3,
            "nome": "Camiseta Metropolis",
            "descritivo": "Camiseta preta com estampa inspirada no clássico filme Metropolis.",
            "valor": 49.90,
            "valorPromo": 44.90,
            "quantidade": 0,
            "destaque": 1,
            "keywords": "filme, estampa, estampado, preta, metropolis, clássico, ficção científica"
        },
        "qtd": 1,
        "valorTotal": 44.90
    },

    {
        "produto": {
            "codigo": 4,
            "nome": "Camiseta Trip to The Moon",
            "descritivo": "Camiseta preta com estampa inspirada no clássico filme Trip to The Moon.",
            "valor": 42.90,
            "valorPromo": 39.90,
            "quantidade": 15,
            "destaque": 1,
            "keywords": "filme, estampa, estampado, preta, trip to the moon, clássico, lua, ficção científica"
        },
        "qtd": 1,
        "valorTotal": 39.90
    }
];

aumentaQuantidade(obj: ItemCesta) {
    obj.qtd += 1;

    let valorProduto = obj.produto.valor;

    if (obj.produto.valorPromo > 0) {
        valorProduto = obj.produto.valorPromo;
    }

    obj.valorTotal += valorProduto;
    this.valorCesta += valorProduto;
}

  ngOnInit(){
    this.valorCesta = 0;
    for(let obj of this.lista){
      this.valorCesta += obj.valorTotal;  
    }
  }


}
