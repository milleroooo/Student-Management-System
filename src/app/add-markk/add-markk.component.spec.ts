import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMarkkComponent } from './add-markk.component';

describe('AddMarkkComponent', () => {
  let component: AddMarkkComponent;
  let fixture: ComponentFixture<AddMarkkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMarkkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMarkkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
