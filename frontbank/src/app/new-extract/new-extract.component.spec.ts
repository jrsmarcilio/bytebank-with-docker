import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewExtractComponent } from './new-extract.component';

describe('NewExtractComponent', () => {
  let component: NewExtractComponent;
  let fixture: ComponentFixture<NewExtractComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewExtractComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewExtractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
