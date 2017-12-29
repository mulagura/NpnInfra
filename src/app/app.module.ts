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

//maps
import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [

    AppComponent,
    WallComponent,
    ProductsComponent,
    ContactComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCWhUZT3eN-mf9JkaSvqS71U93VKkPm-D8'
    })

  ],
  providers: [AppService,WallService],
  bootstrap: [AppComponent]
})
export class AppModule { }
