import {NgModule} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule, MatCardModule,
  MatDatepickerModule, MatDialogModule, MatGridListModule,
  MatInputModule, MatNativeDateModule,
  MatSelectModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';

const EXPORTED_DECLARATIONS = [];
const INTERNAL_DECLARATIONS = [
  ...EXPORTED_DECLARATIONS
];
const EXPORTS = [
  ...EXPORTED_DECLARATIONS,
  BrowserAnimationsModule,
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatInputModule,
  MatSelectModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatGridListModule,
  MatCardModule,
  MatDialogModule
];


@NgModule({
  declarations: INTERNAL_DECLARATIONS,
  imports: [],
  exports: EXPORTS,
  providers: []
})
export class MaterialModule {
}
