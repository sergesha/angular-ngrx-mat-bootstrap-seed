import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { APP_SHARED_COMPONENTS } from './components';
import { MaterialModule } from './material/material.module';

@NgModule({
    declarations: [
        ...APP_SHARED_COMPONENTS
    ],
    exports: [
        CommonModule,
        MaterialModule,
        ...APP_SHARED_COMPONENTS
    ]

})
export class SharedModule {
}
