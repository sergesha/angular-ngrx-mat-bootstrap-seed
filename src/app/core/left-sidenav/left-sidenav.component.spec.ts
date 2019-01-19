import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from '@app/shared/shared.module';

import { LeftSidenavComponent } from './left-sidenav.component';

describe( 'LeftSidenavComponent', () => {
    let component: LeftSidenavComponent;
    let fixture: ComponentFixture<LeftSidenavComponent>;

    beforeEach( async( () => {
        TestBed.configureTestingModule( {
            imports: [ SharedModule, RouterTestingModule ],
            declarations: [ LeftSidenavComponent ]
        } )
            .compileComponents();
    } ) );

    beforeEach( () => {
        fixture = TestBed.createComponent( LeftSidenavComponent );
        component = fixture.componentInstance;
        fixture.detectChanges();
    } );

    it( 'should create', () => {
        expect( component ).toBeTruthy();
    } );
} );
