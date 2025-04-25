import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cadeira',
  imports: [CommonModule],
  templateUrl: './cadeira.component.html',
  styleUrl: './cadeira.component.css'
})
export class CadeiraComponent {
  disciplinas = [
    { numero: 1, nome: 'Análise Matemática I', ano: '1º' },
    { numero: 2, nome: 'Fundamentos de Programação', ano: '1º' }
  ];
}
