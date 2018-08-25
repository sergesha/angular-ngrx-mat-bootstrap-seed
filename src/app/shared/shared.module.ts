import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material/material.module';
import { APP_SHARED_COMPONENTS } from './components';

@NgModule( {
  declarations: [
    ...APP_SHARED_COMPONENTS
  ],
  exports: [
    CommonModule,
    MaterialModule,
    ...APP_SHARED_COMPONENTS
  ]

} )
export class SharedModule {
}
