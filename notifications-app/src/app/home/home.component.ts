import { Component, OnInit, SimpleChanges } from '@angular/core';
import { Announcement } from '../announcement';
import { AnnouncementService } from '../services/announcement.service';
import { NotificationServiceService } from '../services/notification-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  title = 'notifications-app';

  selectedCategory:string;

  notification:any;

  announcements: Announcement[]=[];

  constructor ( private announcementService: AnnouncementService,private notificationService:NotificationServiceService ){
  }
  
  receiveCategory(category:string):void{
    this.selectedCategory=category
    
    console.log("Selected category: ",this.selectedCategory)
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    this.announcementService.getAnnouncements().subscribe((values)=>this.announcements=values);
  }

  ngOnInit():void{

    
    this.notificationService.initWebSocket();

    this.notificationService.notificationSubject.subscribe(hasNotifications => 
      this.notification = hasNotifications ? "ฅ^•ﻌ•^ฅ. Please refresh page" : "");

    this.announcementService.getAnnouncements().subscribe(data => {
      this.announcements = data;
    })
    
  }

  DetectChange(detect:string)
  {
    this.announcementService.getAnnouncements().subscribe((values)=>this.announcements=values);
  }

  CreateAnnouncement(announcement:Announcement)
  {
    this.announcements.push(announcement);
  }

}
