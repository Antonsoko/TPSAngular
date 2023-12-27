import { Component } from '@angular/core';
import { Pizza } from 'src/app/Pizza';
import { ActivatedRoute,Router } from '@angular/router';
import { PizzasService } from 'src/app/pizzas/pizzas.service';


@Component({
  selector: 'app-details-pizza',
  templateUrl: './details-pizza.component.html',
  styleUrls: ['./details-pizza.component.scss']
})
export class DetailsPizzaComponent {
  pizzaToDisplay: Pizza | undefined;
  listOfPizzas: Pizza[] | undefined;

  constructor(private route: ActivatedRoute,private router: Router,private pizzasService: PizzasService){

  }

  ngOnInit(): void {
    const retrivedFromURL = +this.route.snapshot.params['id'];

    this.pizzaToDisplay = this.pizzasService.getSinglePizza(retrivedFromURL);

    console.log('pizzaToDiplay: ',this.pizzaToDisplay);
  }

  ret(): void {
    const link = ['pizza'];
    this.router.navigate(link);
  }

  editPizza(pizzaToEdit: Pizza): void {
    const link = ['pizza/edit', pizzaToEdit.id];
    this.router.navigate(link);
  }
}
