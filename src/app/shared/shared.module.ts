import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from './app-material.module';
import { APP_SHARED_COMPONENTS } from './components';

@NgModule( {
  declarations: [
    ...APP_SHARED_COMPONENTS
  ],
  exports: [
    CommonModule,
    AppMaterialModule,
    ...APP_SHARED_COMPONENTS
  ]

} )
export class SharedModule {
}
