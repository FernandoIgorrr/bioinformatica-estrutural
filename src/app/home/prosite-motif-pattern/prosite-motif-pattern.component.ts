import { ScoreModel } from '../../model/ScoreModel.enum';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { Component } from '@angular/core';

import { HmmService } from '../../service/hmm.service';
import { FastaEntry } from '../../model/FastaEntry.model';
import { Protein } from '../../model/Protien.model';
import { ErrorStateMatcher } from '@angular/material/core';
import { Aminoacid } from '../../model/Aminoacid.model';
import { aminoacidColorMap } from '../../model/ColorMap.model';
import { MatDialog } from '@angular/material/dialog';
import { InfoDialogComponent } from '../info-dialog/info-dialog.component';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-prosite-motif-pattern',
  templateUrl: './prosite-motif-pattern.component.html',
  styleUrl: './prosite-motif-pattern.component.scss'
})
export class PrositeMotifPatternComponent {

  title = 'DBQ0050 - BIOINFORMÁTICA ESTRUTURAL';

    prosite_assinatures                     : string[][]            = [];
    sequences                               : string[]              = [];
    sequences_names                         : string[]              = [];
    fastaEntries                            : FastaEntry[]          = [];
    protein                                 : Protein[]             = [];
    coloredProtein                          : string                = "";
    maxLength                               : number                = 0;
    conservedMap                            : string                = "";
    qualquer                                : string[]              = [];
    qweq                                    : string[][]            = [];
    qweq2                                   : [string,number][]     = [];
    qweq3                                   : [string,number][][]   = [];
    score_model_conservation_toggle_options : string [];
    score_model_conservation                : ScoreModel;

    COLOR_MAP_HEX: { [key: string]: string } = aminoacidColorMap.COLOR_MAP_HEX;

  xthresholdFormControl = new FormControl(20, [Validators.pattern("^[0-9]*$"),Validators.required, Validators.min(1)]);
  matcher = new MyErrorStateMatcher();

  constructor(private hmmService: HmmService,
              public  dialog    : MatDialog
  ){
    this.score_model_conservation_toggle_options =
    [
      ScoreModel.CLASSIFICATION,
      ScoreModel.BLOSUM62
    ]
    this.score_model_conservation = ScoreModel.CLASSIFICATION; // Define a opção padrão
  }


  openInfoDialog(info_num : number): void {
    const dialogRef = this.dialog.open(InfoDialogComponent, {
      data:info_num,
  });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const contents = e.target?.result as string;
        //const entries = this.parseFasta(contents);

        this.hmmService.saveFastaEntries(this.parseFasta(contents));

        this.maxLength = this.hmmService.completeSequencesWithDash();

        this.fastaEntries = this.hmmService.getFastaEntries();

        this.qualquer = this.scatteredConservationPattern_AMINOACID_CLASSIFICATION(this.fastaEntries);
       // console.log(this.qualquer);

        this.qweq = this.groupRepeatedStrings(this.qualquer);
        this.qweq2 = this.countGroupRepeatedStrings(this.qweq);
        this.qweq3 = this.xTresholdDivider(this.qweq2,this.xthresholdFormControl.value);

       // console.log(this.qweq);

        this.prosite_assinatures = this.formatPROSITEmotifsPattern(this.qweq3);

        //console.log( this.prosite_assinature);

       // this.prosite_assinature = this.formataProsite(this.prositeAssinature(this.fastaEntries));

        for(let entry of this.fastaEntries){
          this.protein.push(this.fillFastaProtein(entry));
        //  entry.sequence = this.colorizeString(entry.sequence);
        }

      };
      reader.readAsText(file);
    }
  }

  private parseFasta(content: string): { name: string, sequence: string }[] {
    const lines = content.split('\n');
    const entries: { name: string, sequence: string }[] = [];
    const entries2 : Protein[] = [];
    let name = '';
    let sequence = '';
    for (const line of lines) {
      if (line.startsWith('>')) {
        if (name !== '' && sequence !== '') {
          entries.push({ name, sequence });
        }
        name = line.substring(1).trim(); // Remove o ">" e espaços em branco
        sequence = ''; // Limpa a sequência para a próxima proteína
      } else {
        sequence += line.trim();
      }
    }
    if (name !== '' && sequence !== '') {
      entries.push({ name, sequence });
    }
    return entries;
  }

  /*
  * Função para que recebe um array de entradas Fastas, que é um objetico
  * no padrão {nome: }
  */
  private scatteredConservationPattern_AMINOACID_CLASSIFICATION (fastaEntries : FastaEntry[]) : string[]{
    let scattered_conservation_pattern : string[] = [];

    for (let i = 0; i < this.maxLength;i++){

      const charactersAtPositionI     = fastaEntries.map(entry => entry.sequence[i]);
      const currentlyChar             = fastaEntries[0].sequence[i];

      const todosIguais               = fastaEntries.every(str =>  str.sequence[i] === currentlyChar);
      const todosIguaisClassification = fastaEntries.every(str =>  Aminoacid.getAminoacid(str.sequence[i]).equalsClassification(Aminoacid.getAminoacid(currentlyChar)));

      if(todosIguais) {
        if(currentlyChar === "-" || currentlyChar === "."){
          this.conservedMap += " ";
         // prosite_motif_pattern += "x";
        }
        else{
          scattered_conservation_pattern.push(currentlyChar);

          this.conservedMap += "*";
        }
      }
      else{

        if(todosIguaisClassification){
          const uniqueCharacters = [...new Set(charactersAtPositionI.join(""))];
          scattered_conservation_pattern.push("["+uniqueCharacters.join("")+"]");
        }
        else{
          scattered_conservation_pattern.push("x");
        }
      }
    }
    return scattered_conservation_pattern;
  }

  private scatteredConservationPattern_BLOSUM_62_MATRIX (fastaEntries : FastaEntry[]) : string[]{
    let scattered_conservation_pattern : string[] = [];

    for (let i = 0; i < this.maxLength;i++){

      const charactersAtPositionI     = fastaEntries.map(entry => entry.sequence[i]);
      const currentlyChar             = fastaEntries[0].sequence[i];

      const todosIguais               = fastaEntries.every(str =>  str.sequence[i] === currentlyChar);
      const todosIguaisClassification = fastaEntries.every(str =>  Aminoacid.getAminoacid(str.sequence[i]).equalsClassification(Aminoacid.getAminoacid(currentlyChar)));

      if(todosIguais) {
        if(currentlyChar === "-" || currentlyChar === "."){
          this.conservedMap += " ";
         // prosite_motif_pattern += "x";
        }
        else{
          scattered_conservation_pattern.push(currentlyChar);

          this.conservedMap += "*";
        }
      }
      else{

        if(todosIguaisClassification){
          const uniqueCharacters = [...new Set(charactersAtPositionI.join(""))];
          scattered_conservation_pattern.push("["+uniqueCharacters.join("")+"]");
        }
        else{
          scattered_conservation_pattern.push("x");
        }
      }
    }
    return scattered_conservation_pattern;
  }

  //
  private groupRepeatedStrings(scattered_conservation_pattern: string[]): (string[][]) {

    const result     : string[][] = [];
    let temp         : string[]   = [];

    for (let i = 0; i < scattered_conservation_pattern.length; i++) {
        if (temp.length === 0 || temp[temp.length - 1] === scattered_conservation_pattern[i]) {
            temp.push(scattered_conservation_pattern[i]);
        } else {
            result.push([...temp]);
            temp = [scattered_conservation_pattern[i]];
        }
    }

    if (temp.length > 0) {
        result.push([...temp]);
    }

    return result;
}


private countGroupRepeatedStrings (group_repeated_strings : string [][]): [string,number][]{
  const result : [string,number][] = [];

  for(const repeats of group_repeated_strings){
    const tuple : [string,number] = [repeats[0], repeats.length];
    result.push(tuple);
  }
  if(result[0][0] === 'x') result.shift();
  if(result[result.length - 1][0] === 'x') result.pop();
  return result;
}

private xTresholdDivider(count_group_repeated_strings : [string,number][], xthreshold : number | null): [string,number][][]{

  const result: [string,number][][] = [];
  let   aux   : [string,number][]   = [];

  if(xthreshold === null) xthreshold = 20;

  for(let group of count_group_repeated_strings){
    if((group[0] === 'x' && group[1] < xthreshold) || group[0] != 'x') aux.push(group);
    else if(aux.length > 0){
      result.push(aux);
      aux = [];
    }
  }

  if (aux.length > 0) {
    result.push(aux);
}

  //if(result.length === 0 && aux.length >= 0) result.push(aux);
  //console.log(result);
  return this.fitxTresholdDivider(result);
}

private fitxTresholdDivider (PROSITE_motifs_pattern_x_threshold_divided : [string,number][][]): [string,number][][]{

  const result: [string,number][][] = [];

  for(let motif of PROSITE_motifs_pattern_x_threshold_divided){

    if(motif.length !== 0) {

      result.push(motif);
    }
  }
  return result;
}


private formatPROSITEmotifsPattern(PROSITE_motifs_pattern_x_threshold_divided : [string,number][][]): string[][] {
  let result : string[][]  = [];
  let aux :string[] = [];

  for(const pattern of PROSITE_motifs_pattern_x_threshold_divided){
    for (const conservation of pattern){
      if(conservation[1] > 1){
        aux.push(conservation[0] + "(" + conservation[1] + ")");
      }
      else{
        aux.push(conservation[0]);
      }
    }
    result.push(aux);
    aux = [];
  }

  return result;
}

  fillFastaProtein(fastaEntry:FastaEntry) : Protein{

    //let protein : Protein = {name : fastaEntry.name, sequence : []};
    let protein : Protein = new Protein(fastaEntry.name, []);

    for (let aminoacid of fastaEntry.sequence) {
      protein.sequence.push(Aminoacid.getAminoacid(aminoacid));
    }
    return protein;
  }

  getColor(amino: string): string {
    return  this.COLOR_MAP_HEX[amino] || 'white'; // Cor padrão caso não haja uma cor definida
  }

  selectOptionScoreModel() {
    if (this.score_model_conservation === ScoreModel.CLASSIFICATION) {

    }
    else if (this.score_model_conservation === ScoreModel.BLOSUM62) {

    }
  }

  public copyText(event: MouseEvent, text: string) {
    event.stopPropagation();
    navigator.clipboard.writeText(text).then(() => {
    }).catch(err => {
      console.error('Erro ao copiar texto:', err);
    });
  }
}

