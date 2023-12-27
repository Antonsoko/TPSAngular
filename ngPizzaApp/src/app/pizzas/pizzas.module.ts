import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListpizzaComponent } from './listpizza/listpizza.component';
import { DetailsPizzaComponent } from './details-pizza/details-pizza.component';

import { BorderCardDirective } from '../shared/directives/border-card.directive';
import { PizzaIngredientColorPipe } from '../shared/pipes/pizza-ingredient-color.pipe';
import { PizzaFormComponent } from './pizza-form/pizza-form.component';
import { PizzaEditComponent } from './pizza-edit/pizza-edit.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ListpizzaComponent,
    DetailsPizzaComponent,
    BorderCardDirective,
    PizzaIngredientColorPipe,
    PizzaFormComponent,
    PizzaEditComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class PizzasModule { }
