import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { YoutubeService } from '../../../shared/services/youtube.service';
import { VideoList } from '../../../shared/interfaces/VideoList';
import { Video } from '../../../shared/interfaces/Video';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  videoList!:VideoList;
  videos!:Video[];
  @ViewChild('searchText') searchText!:ElementRef<HTMLInputElement>;
  constructor(private service:YoutubeService) { }

  getVideos() {
    this.service.getVideos(this.searchText.nativeElement.value)
      .subscribe(videoList => {
        this.videoList = videoList;
        this.videos = [...videoList.items];
        this.searchText.nativeElement.value = '';
      })
  }

  formatDate(date:Date) {
    const date_ = new Date(date);
    let day:string|number = date_.getDate();
    let month:string|number = date_.getMonth();
    month++;
    let year:string|number = date_.getFullYear();
    (day<10)?day='0'+day:null;
    (month<10)?month='0'+month:null;
    return `${day}/${month}/${year}`;
  }

  addLiked(video:Video) {
    this.service.addLiked(video);
  }

  checkLiked(video:Video) {
    if (this.service.likedVideos.find(video_ => video_.id.videoId === video.id.videoId) === undefined) return false;
    return true;
  }
}
