import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cesta } from '../cesta/cesta';

@Component({
    imports: [CommonModule],
    selector: 'app-lista-pedidos',
    styleUrl: './lista-pedidos.css',
    templateUrl: './lista-pedidos.html',
})

export class ListaPedidos {
    mensagem: string = "";
    
    listaPedidos = [
        {
            "codigo": 1001,
            "data": "27/09/2026",
            "status": "Concluído",

            "itens": [
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

                    "qtd": 2,
                    "valorTotal": 79.80
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
                }

            ]
        },

        {
            "codigo": 1002,
            "data": "25/09/2026",
            "status": "Processando",

            "itens": [
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

                    "qtd": 2,
                    "valorTotal": 89.80
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

            ]
        },

        {
            "codigo": 1003,
            "data": "20/09/2026",
            "status": "Pendente",

            "itens": [
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
                }
            ]
        }

    ];
    calculaTotalPedido(pedido: any): number {
        let total = 0;

        for (let item of pedido.itens) {
            total += item.valorTotal;
        }
        return total;
    }
}