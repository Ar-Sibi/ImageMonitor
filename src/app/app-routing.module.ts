import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainImagesComponent } from './main-images/main-images.component';
import { MainHomeComponent } from './main-home/main-home.component';
const routes: Routes = [
  { path: '', component:MainHomeComponent},
  { path: ':id', component: MainImagesComponent },
  { path: '**' , redirectTo:'' }
]
@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {
}
