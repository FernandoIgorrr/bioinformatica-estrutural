import { NgModule }               from '@angular/core';
import { CommonModule }           from '@angular/common';
import { MatIconModule }          from '@angular/material/icon';
import { MatButtonModule }        from '@angular/material/button';
import { MatToolbarModule }       from '@angular/material/toolbar';
import { MatTabsModule }          from '@angular/material/tabs';
import { MatInputModule }         from '@angular/material/input';
import { MatFormFieldModule }     from '@angular/material/form-field';
import { MatButtonToggleModule }  from '@angular/material/button-toggle';
import { MatDialogModule }        from '@angular/material/dialog';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports:[
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatTabsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonToggleModule,
    MatDialogModule,
  ]
})
export class AppMaterialModule { }
