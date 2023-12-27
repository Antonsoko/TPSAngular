import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pizza } from 'src/app/Pizza';
import { PizzasService } from 'src/app/pizzas/pizzas.service';

@Component({
  selector: 'app-list-pizza',
  templateUrl: './listpizza.component.html',
  styleUrls: ['./listpizza.component.scss']
})
export class ListpizzaComponent {


  constructor(private router: Router,private pizzasService: PizzasService)
  {
    
  }

  PIZZAS: Pizza[] = [];
  ngOnInit(): void{
    this.PIZZAS = this.pizzasService.getListPizzas();
  }

  selectPizza(selectedPizza : Pizza): void {
    const link = ['pizza', selectedPizza.id];
    this.router.navigate(link);
  }



}
