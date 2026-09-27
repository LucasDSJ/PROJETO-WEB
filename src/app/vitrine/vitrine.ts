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
    "keywords": "série, estampa, estampado, preta, seinfield, comédia, sitcom"
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
    "nome": "Camiseta Trena 5 Metros",
    "descritivo": "Trena com fita de aço de 5 metros, trava de segurança e revestimento resistente.",
    "valor": 24.90,
    "valorPromo": 19.90,
    "quantidade": 35,
    "destaque": 0,
    "keywords": "filme, estampa, estampado, trena, medição, ferramenta, metro, construção"
  },
  {
    "codigo": 6,
    "nome": "Camiseta Furadeira de Impacto 650W",
    "descritivo": "Furadeira de impacto com potência de 650W, ideal para madeira, metal e alvenaria.",
    "valor": 289.90,
    "valorPromo": 249.90,
    "quantidade": 10,
    "destaque": 1,
    "keywords": "filme, estampa, estampado, furadeira, impacto, elétrica, construção, perfuração"
  },
  {
    "codigo": 7,
    "nome": "Camiseta Jogo de Brocas para Concreto",
    "descritivo": "Kit com 6 brocas para concreto em diferentes medidas.",
    "valor": 59.90,
    "valorPromo": 49.90,
    "quantidade": 16,
    "destaque": 0,
    "keywords": "filme, estampa, estampado, broca, concreto, perfuração, furadeira, construção"
  },
  {
    "codigo": 8,
    "nome": "Camiseta Parafuso Sextavado 6x50mm",
    "descritivo": "Parafuso sextavado em aço zincado, indicado para fixações em madeira e estruturas.",
    "valor": 12.90,
    "valorPromo": 10.90,
    "quantidade": 150,
    "destaque": 0,
    "keywords": "filme, estampa, estampado, parafuso, sextavado, aço, fixação, construção"
  },
  {
    "codigo": 9,
    "nome": "Camiseta Caixa com Buchas 8mm",
    "descritivo": "Caixa com 100 buchas de nylon de 8mm para fixações em paredes.",
    "valor": 29.90,
    "valorPromo": 24.90,
    "quantidade": 60,
    "destaque": 0,
    "keywords": "filme, estampa, estampado, bucha, nylon, fixação, parede, parafuso"
  },
  {
    "codigo": 10,
    "nome": "Camiseta Fita Isolante 20 Metros",
    "descritivo": "Fita isolante de PVC para instalações elétricas e pequenos reparos.",
    "valor": 9.90,
    "valorPromo": 7.90,
    "quantidade": 80,
    "destaque": 1,
    "keywords": "filme, estampa, estampado, fita isolante, elétrica, pvc, instalação, manutenção"
  },
  {
    "codigo": 11,
    "nome": "Camiseta Estilete Profissional",
    "descritivo": "Estilete com lâmina retrátil, trava de segurança e corpo reforçado.",
    "valor": 16.90,
    "valorPromo": 13.90,
    "quantidade": 32,
    "destaque": 0,
    "keywords": "filme, estampa, estampado, estilete, lâmina, corte, ferramenta, profissional"
  },
  {
    "codigo": 12,
    "nome": "Camiseta Nível de Alumínio 40cm",
    "descritivo": "Nível de alumínio com três bolhas para nivelamento preciso em obras e instalações.",
    "valor": 54.90,
    "valorPromo": 47.90,
    "quantidade": 14,
    "destaque": 1,
    "keywords": "filme, estampa, estampado, nível, alumínio, construção, medição, instalação"
  },
  {
    "codigo": 13,
    "nome": "Camiseta Serrote para Madeira 20 Polegadas",
    "descritivo": "Serrote com lâmina de aço temperado, indicado para cortes em madeira.",
    "valor": 45.90,
    "valorPromo": 39.90,
    "quantidade": 20,
    "destaque": 0,
    "keywords": "filme, estampa, estampado, serrote, madeira, corte, ferramenta, marcenaria"
  },
  {
    "codigo": 14,
    "nome": "Camiseta Chave Inglesa 10 Polegadas",
    "descritivo": "Chave ajustável em aço cromado para aperto e desaperto de porcas e parafusos.",
    "valor": 38.90,
    "valorPromo": 32.90,
    "quantidade": 27,
    "destaque": 1,
    "keywords": "filme, estampa, estampado, chave inglesa, ajustável, ferramenta, porca, parafuso"
  },
  {
    "codigo": 15,
    "nome": "Camiseta Óculos de Proteção Transparente",
    "descritivo": "Óculos de segurança com lentes transparentes e proteção contra impactos.",
    "valor": 14.90,
    "valorPromo": 11.90,
    "quantidade": 75,
    "destaque": 0,
    "keywords": "filme, estampa, estampado, óculos, proteção, segurança, epi, construção"
  },
  {
    "codigo": 16,
    "nome": "Camiseta Luva de Proteção em Raspa",
    "descritivo": "Luva resistente para proteção das mãos durante trabalhos de construção e manutenção.",
    "valor": 22.90,
    "valorPromo": 18.90,
    "quantidade": 50,
    "destaque": 0,
    "keywords": "filme, estampa, estampado, luva, proteção, segurança, epi, construção"
  },
  {
    "codigo": 17,
    "nome": "Camiseta Extensão Elétrica 10 Metros",
    "descritivo": "Extensão elétrica com cabo flexível de 10 metros e plugue reforçado.",
    "valor": 69.90,
    "valorPromo": 59.90,
    "quantidade": 24,
    "destaque": 1,
    "keywords": "filme, estampa, estampado, extensão, elétrica, cabo, tomada, energia"
  },
  {
    "codigo": 18,
    "nome": "Camiseta Silicone Acético Transparente",
    "descritivo": "Selante de silicone transparente para vedação de superfícies e instalações.",
    "valor": 19.90,
    "valorPromo": 16.90,
    "quantidade": 45,
    "destaque": 0,
    "keywords": "filme, estampa, estampado, silicone, selante, vedação, transparente, construção"
  },
  {
    "codigo": 19,
    "nome": "Camiseta Fita Veda Rosca 18mm",
    "descritivo": "Fita de PTFE para vedação de conexões hidráulicas e tubulações.",
    "valor": 6.90,
    "valorPromo": 5.50,
    "quantidade": 100,
    "destaque": 1,
    "keywords": "filme, estampa, estampado, fita veda rosca, ptfe, hidráulica, vedação, encanamento"
  },
  {
    "codigo": 20,
    "nome": "Camiseta Caixa de Ferramentas 16 Polegadas",
    "descritivo": "Caixa organizadora em plástico resistente com bandeja interna e compartimentos.",
    "valor": 89.90,
    "valorPromo": 79.90,
    "quantidade": 12,
    "destaque": 1,
    "keywords": "filme, estampa, estampado, caixa de ferramentas, organização, ferramentas, plástico, manutenção"
  }
];

verDetalhe(obj:Produto){
  localStorage.setItem("produto", JSON.stringify(obj));
  location.href="./detalhe";
}


}
