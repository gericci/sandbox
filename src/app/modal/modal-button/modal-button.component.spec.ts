import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ModalButtonComponent } from './modal-button.component';

describe('ModalButtonComponent', () => {
  let component: ModalButtonComponent;
  let fixture: ComponentFixture<ModalButtonComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
