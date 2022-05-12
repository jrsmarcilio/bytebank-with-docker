import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewtransferComponent } from './new-transfer.component';

describe('NewtransferComponent', () => {
  let component: NewtransferComponent;
  let fixture: ComponentFixture<NewtransferComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewtransferComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewtransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
