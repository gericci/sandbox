import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalButtonCdkComponent } from './modal-button-cdk.component';

describe('ModalButtonCdkComponent', () => {
  let component: ModalButtonCdkComponent;
  let fixture: ComponentFixture<ModalButtonCdkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalButtonCdkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalButtonCdkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
