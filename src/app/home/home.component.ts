import { Component } from '@angular/core';
import { PrositeMotifPatternComponent } from './prosite-motif-pattern/prosite-motif-pattern.component';
import { FrequencyMatrixCalculatorComponent } from './frequency-matrix-calculator/frequency-matrix-calculator.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {


  tabs = [
    { title: 'PROSITE motif pattern', content: PrositeMotifPatternComponent },
    { title: 'Frequency matrix calculator', content: FrequencyMatrixCalculatorComponent },
    // Adicione quantas guias desejar
  ];

  //tabs : string[] = ['PROSITE motif pattern','Frequency matrix calculator','Pssm calculator','Hmm\'s calculator'];
}
