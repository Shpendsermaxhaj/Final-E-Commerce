import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {MenuComponent} from './menu/menu.component';
import {AboutComponent} from './about/about.component';
import {MobileComponent} from './mobile/mobile.component';
import {CoverComponent} from './cover/cover.component';
import {ClientComponent} from './client.component';


const appRoutes: Routes = [
  {
    path: ' ', component: ClientComponent,
    children: [
      {path: ' ', component: HomeComponent},
      {path: 'menu', component: MenuComponent},
      {path: 'about', component: AboutComponent},
      {path: 'mobile', component: MobileComponent},
      {path: 'cover', component: CoverComponent},
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {path: '**', redirectTo: 'home', pathMatch: 'full'}
    ]
  }




];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)],

  exports: [RouterModule]
})
export class ClientRoutingModule {
}
