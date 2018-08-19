import { async, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe( 'AppComponent', () => {
    beforeEach( async( () => {
        TestBed.configureTestingModule( {
            imports: [
                CoreModule,
                SharedModule,
                BrowserAnimationsModule,
                RouterTestingModule
            ],
            declarations: [
                AppComponent
            ],
        } ).compileComponents();
    } ) );
    it( 'should create the app', async( () => {
        const fixture = TestBed.createComponent( AppComponent );
        const app = fixture.debugElement.componentInstance;
        expect( app ).toBeTruthy();
    } ) );
    it( `should have as title 'angular6-ngrx-mat-bootstrap-seed'`, async( () => {
        const fixture = TestBed.createComponent( AppComponent );
        const app = fixture.debugElement.componentInstance;
        expect( app.title ).toEqual( 'angular6-ngrx-mat-bootstrap-seed' );
    } ) );
    it( 'should render title in a h1 tag', async( () => {
        const fixture = TestBed.createComponent( AppComponent );
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect( compiled.querySelector( 'h1' ).textContent ).toContain( 'Welcome to angular6-ngrx-mat-bootstrap-seed!' );
    } ) );
} );
