import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { Observable, forkJoin, switchMap } from 'rxjs';
import { TopStory } from './top-stories/top-stories.component';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  TopStories:any;
  NewStories:any;
  private apiUrl = 'https://hacker-news.firebaseio.com/v0';
  constructor(private http:HttpClient) { }

  getTopStories():Observable<TopStory[]>{


    const topStoriesUrl = `${this.apiUrl}/topstories.json`;
    return this.http.get<number[]>(topStoriesUrl).pipe(
      switchMap(storyIds => {
        const storyObservables = storyIds.slice(0, 30).map(storyId =>
          this.http.get<TopStory>(`${this.apiUrl}/item/${storyId}.json`)
        );
        return forkJoin(storyObservables);
      })
    );

  }
  getNewStories():Observable<TopStory[]>{


    const newStoriesUrl = `${this.apiUrl}/newstories.json`;
    return this.http.get<number[]>(newStoriesUrl).pipe(
      switchMap(storyIds => {
        const storyObservables = storyIds.slice(0, 30).map(storyId =>
          this.http.get<TopStory>(`${this.apiUrl}/item/${storyId}.json`)
        );
        return forkJoin(storyObservables);
      })
    );

  }

}
