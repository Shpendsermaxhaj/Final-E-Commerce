import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientComponent } from './client.component';
import {HeaderoComponent} from './headero/headero.component';
import {NavbarComponent} from './navbar/navbar.component';
import {CoverComponent} from './cover/cover.component';
import {MobileComponent} from './mobile/mobile.component';
import {HomeComponent} from './home/home.component';
import {MenuComponent} from './menu/menu.component';
import {AboutComponent} from './about/about.component';
import {MenuDetailComponent} from './menu-detail/menu-detail.component';
import {FooteroComponent} from './footero/footero.component';

@NgModule({
  declarations: [
    ClientComponent,
    HeaderoComponent,
    NavbarComponent,
    CoverComponent,
    MobileComponent,
    HomeComponent,
    MenuComponent,
    AboutComponent,
    MenuDetailComponent,
    FooteroComponent

  ],
  imports: [
    CommonModule
  ]
})
export class ClientModule { }
