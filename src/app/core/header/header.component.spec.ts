import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, fakeAsync, flush, TestBed, tick } from '@angular/core/testing';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthFacade } from '@app/core/auth/store/auth.facade';
import { reducer } from '@app/core/auth/store/auth.reducer';
import { FeatureOneFacade } from '@app/features/feature-one/store/feature-one.facade';
import { FeatureTwoFacade } from '@app/features/feature-two/store/feature-two.facade';
import { SharedModule } from '@app/shared/shared.module';
import { AppStoreFacade } from '@app/store/app-store.facade';
import { AppStoreModule } from '@app/store/app-store.module';
import { reducers } from '@app/store/app.reducer';
import { AngularFirestoreStub } from '@app/test-stubs/angular-firestore.stub';
import { combineReducers, StoreModule } from '@ngrx/store';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
    let component: HeaderComponent;
    let fixture: ComponentFixture<HeaderComponent>;

    beforeEach(fakeAsync(() => {
        TestBed.configureTestingModule({
            providers: [AppStoreFacade, AuthFacade, FeatureOneFacade, FeatureTwoFacade],
            // providers: [
            //     AuthFacade,
            //     FeatureOneFacade,
            //     FeatureTwoFacade,
            //     { provide: AngularFirestore, useValue: AngularFirestoreStub }
            // ],
            imports: [
                SharedModule,
                // AppStoreModule,
                // HttpClientModule,
                StoreModule.forRoot({
                    ...reducers,
                    // Auth: combineReducers(reducer)
                })
            ],
            declarations: [HeaderComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(HeaderComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    }));

    // TODO: Error: 1 timer(s) still in the queue.
    // it('should compile', () => {
    //     expect(component).toBeTruthy();
    // });
});
