
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AnnouncementComponent } from './announcement/announcement.component';
import { AddAnnouncementComponent } from './add-announcement/add-announcement.component';
import { CategoriesComponent } from './categories/categories.component';
import { AuthorPipe } from './author.pipe';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';

import { AnnouncementService } from './services/announcement.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from "@angular/material/card";
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { EditAnnouncementComponent } from './edit-announcement/edit-announcement.component';
import { NotificationServiceService } from './services/notification-service.service';

@NgModule({
  declarations: [
    AppComponent,
    AnnouncementComponent,
    AddAnnouncementComponent,
    CategoriesComponent,
    AuthorPipe,
    HomeComponent,
    EditAnnouncementComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    CommonModule,
    MatSelectModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AnnouncementService,NotificationServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
