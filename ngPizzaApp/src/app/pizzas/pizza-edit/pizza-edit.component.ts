import { Component } from '@angular/core';
import { Pizza } from 'src/app/Pizza';


import { ActivatedRoute,Router } from '@angular/router';

import { PizzasService } from 'src/app/pizzas/pizzas.service';



@Component({
  selector: 'app-pizza-edit',
  templateUrl: './pizza-edit.component.html',
  styleUrls: ['./pizza-edit.component.scss']
})
export class PizzaEditComponent {
  singlePizza: Pizza | undefined;

  constructor(private route: ActivatedRoute,private pizzasService: PizzasService){

  }


  ngOnInit(){

    const retrivedFromURL = +this.route.snapshot.params['id'];

    this.singlePizza = this.pizzasService.getSinglePizza(retrivedFromURL);
  }
}
