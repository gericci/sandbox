import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CNodeComponent } from './c-node.component';

describe('CNodeComponent', () => {
  let component: CNodeComponent;
  let fixture: ComponentFixture<CNodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CNodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
