import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AddAnnouncementComponent } from './add-announcement/add-announcement.component';
import { HomeComponent } from './home/home.component';
import { EditAnnouncementComponent } from './edit-announcement/edit-announcement.component';

const routes:Routes=[
  { path: 'add', component: AddAnnouncementComponent },
  { path: 'home', component: HomeComponent, pathMatch:"full"},
  { path: '', component: HomeComponent, pathMatch:"full"},
  { path:'edit/:id',component:EditAnnouncementComponent,pathMatch:'full'}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { 
  
}
