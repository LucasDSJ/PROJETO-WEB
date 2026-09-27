import { Component } from '@angular/core';
import { Produto } from '../model/produto';
import { CommonModule } from '@angular/common';
import { ItemCesta } from '../model/item-cesta';
@Component({
  imports: [CommonModule],
  selector: 'app-vitrine',
  styleUrl: './vitrine.css',
  templateUrl: './vitrine.html',
})
export class Vitrine {
    lista: Produto[] = [
        {
            "codigo": 1,
            "nome": "Camiseta Donnie Darko",
            "descritivo": "Camiseta azul marinho com estampa do filme Donnie Darko.",
            "valor": 39.90,
            "valorPromo": 0,
            "quantidade": 25,
            "destaque": 1,
            "keywords": "filme, estampa, estampado, azul, donnie darko"
        },

        {
            "codigo": 2,
            "nome": "Camiseta Seinfield",
            "descritivo": "Camiseta bege com estampa inspirada na série Seinfield.",
            "valor": 39.90,
            "valorPromo": 0,
            "quantidade": 40,
            "destaque": 0,
            "keywords": "série, estampa, estampado, bege, seinfield, comédia, sitcom"
        },

        {
            "codigo": 3,
            "nome": "Camiseta Metropolis",
            "descritivo": "Camiseta preta com estampa inspirada no clássico filme Metropolis.",
            "valor": 49.90,
            "valorPromo": 44.90,
            "quantidade": 0,
            "destaque": 1,
            "keywords": "filme, estampa, estampado, preta, metropolis, clássico, ficção científica"
        },

        {
            "codigo": 4,
            "nome": "Camiseta Trip to The Moon",
            "descritivo": "Camiseta preta com estampa inspirada no clássico filme Trip to The Moon.",
            "valor": 42.90,
            "valorPromo": 39.90,
            "quantidade": 15,
            "destaque": 1,
            "keywords": "filme, estampa, estampado, preta, trip to the moon, clássico, lua, ficção científica"
        },

        {
            "codigo": 5,
            "nome": "Camiseta Los Pollos Hermanos",
            "descritivo": "Camiseta branca com estampa inspirada na série Breaking Bad e na rede Los Pollos Hermanos.",
            "valor": 24.90,
            "valorPromo": 19.90,
            "quantidade": 35,
            "destaque": 0,
            "keywords": "série, estampa, estampado, branca, breaking bad, los pollos hermanos, walter white"
        },

        {
            "codigo": 6,
            "nome": "Camiseta Dunder Mifflin",
            "descritivo": "Camiseta azul com estampa inspirada na empresa Dunder Mifflin da série The Office.",
            "valor": 289.90,
            "valorPromo": 249.90,
            "quantidade": 0,
            "destaque": 1,
            "keywords": "série, estampa, estampado, azul, dunder mifflin, the office, comédia, sitcom"
        },

        {
            "codigo": 7,
            "nome": "Camiseta Heisenberg",
            "descritivo": "Camiseta preta com estampa inspirada no personagem Heisenberg da série Breaking Bad.",
            "valor": 59.90,
            "valorPromo": 49.90,
            "quantidade": 0,
            "destaque": 0,
            "keywords": "série, estampa, estampado, preta, heisenberg, breaking bad, walter white"
        },

        {
            "codigo": 8,
            "nome": "Camiseta Nosferatu",
            "descritivo": "Camiseta cinza com estampa inspirada no clássico filme Nosferatu.",
            "valor": 12.90,
            "valorPromo": 10.90,
            "quantidade": 150,
            "destaque": 0,
            "keywords": "filme, estampa, estampado, cinza, nosferatu, clássico, terror, vampiro"
        },

        {
            "codigo": 9,
            "nome": "Camiseta Casablanca",
            "descritivo": "Camiseta branca com estampa inspirada no clássico filme Casablanca.",
            "valor": 29.90,
            "valorPromo": 24.90,
            "quantidade": 60,
            "destaque": 0,
            "keywords": "filme, estampa, estampado, branca, casablanca, clássico, romance, drama"
        },

        {
            "codigo": 10,
            "nome": "Camiseta Better Call Saul",
            "descritivo": "Camiseta amarela com estampa inspirada na série Better Call Saul.",
            "valor": 9.90,
            "valorPromo": 7.90,
            "quantidade": 80,
            "destaque": 1,
            "keywords": "série, estampa, estampado, amarela, better call saul, saul goodman, breaking bad"
        },

        {
            "codigo": 11,
            "nome": "Camiseta Stranger Things",
            "descritivo": "Camiseta preta com estampa inspirada na série Stranger Things.",
            "valor": 16.90,
            "valorPromo": 13.90,
            "quantidade": 32,
            "destaque": 0,
            "keywords": "série, estampa, estampado, preta, stranger things, terror, ficção científica, netflix"
        },

        {
            "codigo": 12,
            "nome": "Camiseta O Iluminado",
            "descritivo": "Camiseta branca com estampa inspirada no clássico filme O Iluminado.",
            "valor": 54.90,
            "valorPromo": 47.90,
            "quantidade": 14,
            "destaque": 1,
            "keywords": "filme, estampa, estampado, branca, o iluminado, clássico, terror, stanley kubrick"
        },

        {
            "codigo": 13,
            "nome": "Camiseta Cobra Kai",
            "descritivo": "Camiseta vermelha com estampa inspirada na série Cobra Kai.",
            "valor": 45.90,
            "valorPromo": 39.90,
            "quantidade": 20,
            "destaque": 0,
            "keywords": "série, estampa, estampado, vermelha, cobra kai, karatê, ação, netflix"
        },

        {
            "codigo": 14,
            "nome": "Camiseta Mr. Robot",
            "descritivo": "Camiseta azul com estampa inspirada na série Mr. Robot.",
            "valor": 38.90,
            "valorPromo": 32.90,
            "quantidade": 27,
            "destaque": 1,
            "keywords": "série, estampa, estampado, azul, mr robot, tecnologia, hacker, drama"
        },

        {
            "codigo": 15,
            "nome": "Camiseta Game of Thrones",
            "descritivo": "Camiseta preta com estampa inspirada na série Game of Thrones.",
            "valor": 14.90,
            "valorPromo": 11.90,
            "quantidade": 75,
            "destaque": 0,
            "keywords": "série, estampa, estampado, preta, game of thrones, fantasia, medieval, dragões"
        },

        {
            "codigo": 16,
            "nome": "Camiseta Star Trek",
            "descritivo": "Camiseta azul com estampa inspirada na série Star Trek.",
            "valor": 22.90,
            "valorPromo": 18.90,
            "quantidade": 50,
            "destaque": 0,
            "keywords": "série, estampa, estampado, azul, star trek, ficção científica, espaço, clássico"
        },

        {
            "codigo": 17,
            "nome": "Camiseta Venom",
            "descritivo": "Camiseta preta com estampa inspirada no personagem Venom.",
            "valor": 69.90,
            "valorPromo": 59.90,
            "quantidade": 24,
            "destaque": 1,
            "keywords": "filme, estampa, estampado, preta, venom, marvel, super-herói, quadrinhos"
        },

        {
            "codigo": 18,
            "nome": "Camiseta The Walking Dead",
            "descritivo": "Camiseta marrom com estampa inspirada na série The Walking Dead.",
            "valor": 19.90,
            "valorPromo": 16.90,
            "quantidade": 45,
            "destaque": 0,
            "keywords": "série, estampa, estampado, marrom, the walking dead, zumbi, terror, sobrevivência"
        },

        {
            "codigo": 19,
            "nome": "Camiseta Doug",
            "descritivo": "Camiseta preta com estampa inspirada no desenho animado Doug.",
            "valor": 6.90,
            "valorPromo": 5.50,
            "quantidade": 100,
            "destaque": 1,
            "keywords": "desenho, estampa, estampado, preta, doug, nickelodeon, animação, clássico"
        },

        {
            "codigo": 20,
            "nome": "Camiseta Julius",
            "descritivo": "Camiseta cinza com estampa inspirada no personagem Julius da série Todo Mundo Odeia o Chris.",
            "valor": 89.90,
            "valorPromo": 79.90,
            "quantidade": 12,
            "destaque": 1,
            "keywords": "série, estampa, estampado, cinza, julius, todo mundo odeia o chris, comédia, sitcom"
        }
];

verDetalhe(obj:Produto){
  localStorage.setItem("produto", JSON.stringify(obj));
  location.href="./detalhe";
}


}
