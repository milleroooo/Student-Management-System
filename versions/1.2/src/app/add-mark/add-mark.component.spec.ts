import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMarkComponent } from './add-mark.component';

describe('AddMarkComponent', () => {
  let component: AddMarkComponent;
  let fixture: ComponentFixture<AddMarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMarkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
