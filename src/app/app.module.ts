import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AppMaterialModule } from './app-material/app-material.module';
import { AppFormModule } from './app-form/app-form.module';
import { NgOptimizedImage } from '@angular/common';
import { BreakLinesPipe } from './pipe/break-lines.pipe';
import { HomeComponent } from './home/home.component';
import { PrositeMotifPatternComponent } from './home/prosite-motif-pattern/prosite-motif-pattern.component';
import { FrequencyMatrixCalculatorComponent } from './home/frequency-matrix-calculator/frequency-matrix-calculator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppIconsModule } from './app-icons/app-icons.module';
import { InfoDialogComponent } from './home/info-dialog/info-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    BreakLinesPipe,
    HomeComponent,
    PrositeMotifPatternComponent,
    FrequencyMatrixCalculatorComponent,
    InfoDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppMaterialModule,
    AppFormModule,
    AppIconsModule,
    NgOptimizedImage,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
