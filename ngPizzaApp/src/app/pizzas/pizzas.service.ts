import { Injectable } from '@angular/core';

import { Pizza } from 'src/app/Pizza';
import { LIST_PIZZAS } from 'src/app/shared/list.pizza';

@Injectable({
  providedIn: 'root'
})
export class PizzasService {

  constructor() { }

  getListPizzas(): Pizza[]{
    return LIST_PIZZAS;
  }

  getSinglePizza(id: number): Pizza | undefined {
    const listPizzas = this.getListPizzas();
    return listPizzas.find(pizza => pizza.id === id);
  }

  getPizzaIngredients() :string[] {
    return ['S. tomate','chèvre', 'v. kebab','roquette','piments',"miel",'C. fraîche','v. hachée','S.barbecue','champignons','merguez','mozzarella','oignons'];
  }

}
