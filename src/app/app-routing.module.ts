import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopStoriesComponent } from './top-stories/top-stories.component';
import { NewStoriesComponent } from './new-stories/new-stories.component';

const routes: Routes = [
  {path:'top-stories',component:TopStoriesComponent},
  {path:'new-stories',component:NewStoriesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
