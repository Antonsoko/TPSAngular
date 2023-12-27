import { Component,Input } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

import { PizzasService } from 'src/app/pizzas/pizzas.service';
import { Pizza } from 'src/app/Pizza';

@Component({
  selector: 'app-pizza-form',
  templateUrl: './pizza-form.component.html',
  styleUrls: ['./pizza-form.component.scss']
})
export class PizzaFormComponent {
  ingredients: string[] = [];
  constructor(private router: Router,private pizzasService: PizzasService){

  }

  ngOnInit(){
    this.ingredients = this.pizzasService.getPizzaIngredients();
  }

  @Input() pizza: Pizza | undefined;

  hasIngredient(type: string): boolean {
    const index = this.pizza?.compositions?.indexOf(type);
    return (index!==-1) ? true : false;
  }

  selectIngredient($event: any, ingredient: string): void {
    const checked = $event.target.checked;
    if(checked) {
      this.pizza?.compositions?.push(ingredient);
    } else {
      const index = this.pizza?.compositions?.indexOf(ingredient);
      if(index && index > -1) {
        this.pizza?.compositions?.splice(index, 1);
      }
    }
  }

  onSubmit(): void {
    console.log('Submit From !');
    const lien = ['/pizza',this.pizza?.id];
    this.router.navigate(lien);
  }

  isCompositionValid(ingredient: string): boolean {
    if(this.pizza?.compositions?.length ===1 && this.hasIngredient(ingredient)){
      return false;
    }

    if(this.pizza?.compositions && this.pizza?.compositions.length >= 3 && !this.hasIngredient(ingredient)){
      return false;
    }

    return true;
  }

  ret(): void {
    const link = ['pizza'];
    this.router.navigate(link);
  }



}
