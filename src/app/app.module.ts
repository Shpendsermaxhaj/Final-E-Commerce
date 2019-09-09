import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CarouselModule.forRoot(),
    FormsModule,
    AppRoutingModule,



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
