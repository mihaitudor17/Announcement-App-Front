import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { Announcement } from '../announcement';
import { Category } from '../category';
import { AnnouncementService } from '../services/announcement.service';
import { NotificationServiceService } from '../services/notification-service.service';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.scss']
})

export class AnnouncementComponent implements OnInit {

 @Input('announc') announcement:Announcement=
 {
   id: "",
   author: "",
   message: "",
   title: "",
   category: Category.General,
   imageUrl: ""
 };

  @Output()
  changedDetected:any = new EventEmitter<any>();

  constructor(private announcementService: AnnouncementService,private notificationService:NotificationServiceService) { }

  ngOnInit(): void {
  }

  deleteAnnouncement(Id: string) {

    this.announcementService.deleteAnnouncement(Id).subscribe(r=>
      this.notificationService.sendMessage("BroadcastMessage", [r]))

    this.changedDetected.emit("");
  }
}
