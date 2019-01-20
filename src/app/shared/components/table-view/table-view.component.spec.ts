import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatPaginatorModule, MatSortModule, MatTableModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { KeysOfPipe } from '@app/shared/pipes';

import { TableViewComponent } from './table-view.component';

describe('TableViewComponent', () => {
    let component: TableViewComponent;
    let fixture: ComponentFixture<TableViewComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                KeysOfPipe,
                TableViewComponent,
            ],
            imports: [
                NoopAnimationsModule,
                MatPaginatorModule,
                MatSortModule,
                MatTableModule,
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(TableViewComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should compile', () => {
        expect(component).toBeTruthy();
    });
});
