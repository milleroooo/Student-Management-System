import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowMarkComponent } from './show-mark.component';

describe('ShowMarkComponent', () => {
  let component: ShowMarkComponent;
  let fixture: ComponentFixture<ShowMarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowMarkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowMarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
