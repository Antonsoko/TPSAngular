import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsPizzaComponent } from './details-pizza.component';

describe('DetailsPizzaComponent', () => {
  let component: DetailsPizzaComponent;
  let fixture: ComponentFixture<DetailsPizzaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsPizzaComponent]
    });
    fixture = TestBed.createComponent(DetailsPizzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
