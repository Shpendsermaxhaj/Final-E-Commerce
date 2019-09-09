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
import { FormsModule } from '@angular/forms';
import { MenuDetailComponent } from './menu-detail/menu-detail.component';
import { FooteroComponent } from './footero/footero.component';

import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ProductModule } from './shop/product/product.module';
import { ShopModule } from './shop/shop.module';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

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
    FormsModule,
    HttpClientModule,
    ShopModule,
    SharedModule,
    ProductModule,
    AppRoutingModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
