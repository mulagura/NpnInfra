import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//components

import { WallComponent } from './wall/wall.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';


//Routes

const appRoutes: Routes =[

  {path: '', redirectTo:'/wall', pathMatch:'full'},
  {path: 'wall', component: WallComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'contact', component: ContactComponent},
  {path: '**',  redirectTo:'/wall', pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {useHash: false})],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
