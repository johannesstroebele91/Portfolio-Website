import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DataProtectionDeclarationComponent} from './data-protection-declaration.component';

describe('DataProtectionDeclarationComponent', () => {
    let component: DataProtectionDeclarationComponent;
    let fixture: ComponentFixture<DataProtectionDeclarationComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DataProtectionDeclarationComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DataProtectionDeclarationComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
