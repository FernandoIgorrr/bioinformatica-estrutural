import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { faCopy } from '@fortawesome/free-solid-svg-icons';



@NgModule({
  declarations: [],
  exports:[
    FontAwesomeModule,
  ],
  imports: [
    CommonModule
  ]
})
export class AppIconsModule {
  constructor(library: FaIconLibrary) {
    // Add an icon to the library for convenient access in other components
    library.addIcons(faCopy);
    library.addIcons(faInfoCircle);

  }
}
