import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ModalCdkComponent } from './modal-cdk.component';

describe('ModalCdkComponent', () => {
  let component: ModalCdkComponent;
  let fixture: ComponentFixture<ModalCdkComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalCdkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalCdkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
