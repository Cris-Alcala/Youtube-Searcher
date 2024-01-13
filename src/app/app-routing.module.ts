import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './search/pages/home/home.component';
import { LikedvideosComponent } from './search/pages/likedvideos/likedvideos.component';

const routes: Routes = [
  {path:'search', component:HomeComponent},
  {path:'likedvideos', component:LikedvideosComponent},
  {path:'**', redirectTo:'search'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
