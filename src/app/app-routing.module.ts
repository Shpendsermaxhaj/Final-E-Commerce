import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { MobileComponent } from './mobile/mobile.component';
import { TestComponent } from './test/test.component';
import { PizzatestComponent } from './pizzatest/pizzatest.component';
import { CoverComponent } from './cover/cover.component';

const appRoutes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'about', component: AboutComponent },
  { path: 'mobile', component: MobileComponent },
  { path: 'test', component: TestComponent },
  { path: 'pizzatest', component: PizzatestComponent },
  { path: 'cover', component: CoverComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }


];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)],

  exports: [RouterModule]
})
export class AppRoutingModule {}
