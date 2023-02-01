import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionMarkComponent } from './action.mark.component';

describe('AddMarkComponent', () => {
  let component: ActionMarkComponent;
  let fixture: ComponentFixture<ActionMarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionMarkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActionMarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
