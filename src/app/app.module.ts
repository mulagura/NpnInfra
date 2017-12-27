import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//components
import { AppComponent } from './app.component';
import { WallComponent } from './wall/wall.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';

//routes
import { AppRoutingModule }  from './app.routing.module';

//service
import { AppService, WallService } from './app.service';

@NgModule({
  declarations: [

    AppComponent,
    WallComponent,
    ProductsComponent,
    ContactComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AppService,WallService],
  bootstrap: [AppComponent]
})
export class AppModule { }
