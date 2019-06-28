import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderoComponent } from './headero/headero.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CoverComponent } from './cover/cover.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';
import { MobileComponent } from './mobile/mobile.component';
import { TestComponent } from './test/test.component';
import { PizzatestComponent } from './pizzatest/pizzatest.component';
import {FormsModule} from '@angular/forms';
import { MenuDetailComponent } from './menu-detail/menu-detail.component';
import { FooteroComponent } from './footero/footero.component';

import {CarouselModule} from 'ngx-bootstrap/carousel';



@NgModule({
  declarations: [
    AppComponent,
    HeaderoComponent,
    NavbarComponent,
    CoverComponent,
    MobileComponent,
    PizzatestComponent,
    HomeComponent,
    MenuComponent,
    AboutComponent,
    TestComponent,
    MenuDetailComponent,
    FooteroComponent,
  ],
  imports: [
    BrowserModule,
    CarouselModule.forRoot(),
    AppRoutingModule,
    FormsModule,

    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'menu', component: MenuComponent},
      {path: 'about' , component: AboutComponent},
      { path: 'mobile', component: MobileComponent},
      {path: 'test', component: TestComponent},
      {path: 'pizzatest', component: PizzatestComponent},
      {path: 'cover', component: CoverComponent},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
