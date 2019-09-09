import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
const appRoutes: Routes = [

  {
    path: '',
    loadChildren: './admin/admin.module.ts#AdminModule'
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)],

  exports: [RouterModule]
})
export class AppRoutingModule {
}
