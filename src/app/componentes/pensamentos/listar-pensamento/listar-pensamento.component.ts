import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos = [
    {
      conteudo: 'Passo infos para o componente filho',
      autoria: 'Componente Pai',
      modelo: 'modelo3'
    },
    {
      conteudo: 'Minha propriedade é decorada com @Input()',
      autoria: 'Componente Filho',
      modelo: 'modelo1'
    },
    {
      conteudo: 'As diretivas são como atributos em um elemento DOM que informa o Angular para que adicione algum comportamento a este elemento. Sobre as diretivas que conheceu nesta aula, marque as afirmativas corretas. As diretivas são como atributos em um elemento DOM que informa o Angular para que adicione algum comportamento a este elemento. Sobre as diretivas que conheceu nesta aula, marque as afirmativas corretas.',
      autoria: 'Dev',
      modelo: 'modelo2'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
