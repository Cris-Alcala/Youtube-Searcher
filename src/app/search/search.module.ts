import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { LikedvideosComponent } from './pages/likedvideos/likedvideos.component';



@NgModule({
  declarations: [
    HomeComponent,
    LikedvideosComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent,
    LikedvideosComponent
  ]
})
export class SearchModule { }
