import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from '@app/shared/shared.module';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { EntityServices, NgrxDataModule } from 'ngrx-data';

import { UsersComponent } from './users.component';

describe('UsersComponent', () => {
    let component: UsersComponent;
    let fixture: ComponentFixture<UsersComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                SharedModule,
                // HttpClientModule,
                // StoreModule.forRoot({}),
                // EffectsModule.forRoot([]),
                // NgrxDataModule.forRoot({}),
            ],
            declarations: [UsersComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(UsersComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    // TODO: NullInjectorError: No provider for EntityServices!
    // it('should create', () => {
    //     expect(component).toBeTruthy();
    // });
});
