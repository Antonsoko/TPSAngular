import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListpizzaComponent } from './listpizza.component';

describe('ListpizzaComponent', () => {
  let component: ListpizzaComponent;
  let fixture: ComponentFixture<ListpizzaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListpizzaComponent]
    });
    fixture = TestBed.createComponent(ListpizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
