import { Injectable } from '@angular/core';
import { FastaEntry } from '../model/FastaEntry.model';


@Injectable({
  providedIn: 'root'
})

export class HmmService {

  private fastaEntries: FastaEntry[] = [];

  constructor() { }

  saveFastaEntries(entries: FastaEntry[]) {
    this.fastaEntries = entries;
  }

  getFastaEntries(): FastaEntry[] {
    return this.fastaEntries;
  }

  completeSequencesWithDash() : number {
    if (this.fastaEntries.length === 0) return 0;

    const maxLength = Math.max(...this.fastaEntries.map(entry => entry.sequence.length));
    const fastaEntriesAux = [];
    for (const entry of this.fastaEntries) {
      const diffLength = maxLength - entry.sequence.length;
      if (diffLength > 0) {
        entry.sequence += '.'.repeat(diffLength);
        //entry.sequence += " " + diffLength;

      }
      fastaEntriesAux.push(entry);
      //console.log("Nome: " + entry.name + "\n" + "SEQUENCE: \n" + entry.sequence);
    }
    this.fastaEntries = fastaEntriesAux;

    return maxLength;
  }
}
