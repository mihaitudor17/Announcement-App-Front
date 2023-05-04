import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Announcement } from '../announcement';
import { Category } from '../category';
import { AnnouncementService } from '../services/announcement.service';
import { NotificationServiceService } from '../services/notification-service.service';

@Component({
  selector: 'app-add-announcement',
  templateUrl: './add-announcement.component.html',
  styleUrls: ['./add-announcement.component.scss']
})

export class AddAnnouncementComponent implements OnInit {

  titleFormControl = new FormControl('', [Validators.required, Validators.minLength(4)]);
  authorFormControl = new FormControl('', [Validators.required, Validators.minLength(4)]);
  messageFormControl = new FormControl('', [Validators.required, Validators.minLength(4)]);
  imageURLFormControl = new FormControl('', [Validators.required, Validators.minLength(4)]);
  categoryFormControl = new FormControl('', [Validators.required])

  categories:Category[]=Object.values(Category);
  newMessage:string="";
  newTitle:string="";
  newAuthor:string="";
  newCategory:Category=Category.None;
  newImageUrl:string="";

  @Output() newAnnouncement = new EventEmitter<any>();

  ann:Announcement={id:"", title:"",message:"",author:"",category:Category.None,imageUrl:""};

  constructor ( private announcementService: AnnouncementService,private notificationService:NotificationServiceService){
  }

  ngOnInit(): void {
  }

  addAnnouncement():void{

    console.log("ADDED")

    // const annouc:Announcement={
    //   id:undefined,
    //   message: this.newMessage,
    //   title: this.newAuthor,
    //   author: this.newAuthor,
    //   category: this.newCategory,
    //   imageUrl: this.newImageUrl,
    // }
    console.log(this.ann);
    this.announcementService.addAnnouncement(this.ann).subscribe(r => 
        this.notificationService.sendMessage("BroadcastMessage", [r])
      );
    this.newAnnouncement.emit("")
  }
}
