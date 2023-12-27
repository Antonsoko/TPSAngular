import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListpizzaComponent } from './pizzas/listpizza/listpizza.component';
import { DetailsPizzaComponent } from './pizzas/details-pizza/details-pizza.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { PizzaEditComponent } from './pizzas/pizza-edit/pizza-edit.component';




const routes: Routes = [
  {path:'pizza',component: ListpizzaComponent},
  {path:'pizza/edit/:id',component: PizzaEditComponent},
  {path:'pizza/:id',component: DetailsPizzaComponent},
  {path:'',redirectTo: 'pizza',pathMatch: 'full'},
  {path:'**',component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
