import { Component } from '@angular/core';
import { YoutubeService } from '../../../shared/services/youtube.service';
import { Video } from '../../../shared/interfaces/Video';

@Component({
  selector: 'app-likedvideos',
  templateUrl: './likedvideos.component.html',
  styleUrl: './likedvideos.component.css'
})
export class LikedvideosComponent {
  likedVideos!:Video[];
  constructor(private service:YoutubeService) {
    this.getLikedVideos();
  }
  checkLiked(video:Video) {
    if (this.service.likedVideos.find(video_ => video_.id.videoId === video.id.videoId) === undefined) return false;
    return true;
  }
  getLikedVideos() {
    this.likedVideos = [...this.service.getLikedVideos()];
  }
  addLiked(video:Video) {
    this.service.addLiked(video);
  }
}
