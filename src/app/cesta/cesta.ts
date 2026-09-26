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
      "nome": "Martelo de Unha 25mm",
      "descritivo": "Martelo com cabo de madeira e cabeça de aço forjado, ideal para trabalhos gerais.",
      "valor": 39.90,
      "valorPromo": 0,
      "quantidade": 25,
      "destaque": 1,
      "keywords": "martelo, ferramentas, construção, madeira, aço"
    },
    "qtd": 1,
    "valorTotal": 39.90
  },
  {
    "produto": {
      "codigo": 2,
      "nome": "Chave de Fenda 6mm",
      "descritivo": "Chave de fenda com ponta em aço temperado e cabo ergonômico.",
      "valor": 18.90,
      "valorPromo": 0,
      "quantidade": 40,
      "destaque": 0,
      "keywords": "chave, fenda, ferramenta, parafuso, manutenção"
    },
    "qtd": 1,
    "valorTotal": 18.90
  },
  {
    "produto": {
      "codigo": 3,
      "nome": "Jogo de Chaves Phillips",
      "descritivo": "Conjunto com 5 chaves Phillips de diferentes tamanhos para uso doméstico e profissional.",
      "valor": 49.90,
      "valorPromo": 44.90,
      "quantidade": 0,
      "destaque": 1,
      "keywords": "chave phillips, jogo, ferramentas, parafusos, manutenção"
    },
    "qtd": 1,
    "valorTotal": 44.90
  },
  {
    "produto": {
      "codigo": 4,
      "nome": "Alicate Universal 8 Polegadas",
      "descritivo": "Alicate universal em aço carbono com cabo emborrachado e alta resistência.",
      "valor": 42.90,
      "valorPromo": 39.90,
      "quantidade": 0,
      "destaque": 1,
      "keywords": "alicate, universal, ferramenta, corte, aperto"
    },
    "qtd": 1,
    "valorTotal": 39.90
  }
]
;

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
