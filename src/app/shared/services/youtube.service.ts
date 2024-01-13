import { Injectable } from '@angular/core';
import { VideoList } from '../interfaces/VideoList';
import { Video } from '../interfaces/Video';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  private endpoint:string = 'https://www.googleapis.com/youtube/v3/search';
  private apiKey:string = '';
  videoList!:VideoList;
  likedVideos:Video[] = [];

  constructor(private http:HttpClient) {
    let prevLiked = localStorage.getItem('liked');
    if (prevLiked!==null) {
      this.likedVideos = JSON.parse(prevLiked);
    }
  }

  getVideos(search:string) {
    const params = new HttpParams()
      .set('part', 'snippet')
      .set('q', search)
      .set('maxResults', 10)
      .set('key', this.apiKey)

    return this.http.get<VideoList>(`${this.endpoint}`, {params})
      .pipe(map(response => {
        this.videoList=response;
        return this.videoList;
      }))
  }
  getLikedVideos() {
    return this.likedVideos;
  }
  addLiked(video:Video) {
    if (this.likedVideos.find(video_ => video_.id.videoId === video.id.videoId) === undefined) {
      this.likedVideos = [...this.likedVideos, video];
      localStorage.setItem('liked', JSON.stringify(this.likedVideos));
    } else {
      this.likedVideos = [...this.likedVideos.filter(video_ => video_.id.videoId !== video.id.videoId)];
      localStorage.setItem('liked', JSON.stringify(this.likedVideos));
    } 
  }
}
