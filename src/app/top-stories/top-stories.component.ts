import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-top-stories',
  templateUrl: './top-stories.component.html',
  styleUrls: ['./top-stories.component.css']
})





export class TopStoriesComponent {
  tempArray:any;
  finalArray:any;
  stories:TopStory[] | undefined;
 constructor(private apiService:ApiService,private http:HttpClient){}
  ngOnInit():void{
    this.apiService.getTopStories().subscribe((data)=>{this.stories=data;console.log(this.stories);});
  }
}
export interface TopStory {
  by: string
  descendants: number
  id: number
  kids: number[]
  score: number
  time: number
  title: string
  type: string
  url: string
}
