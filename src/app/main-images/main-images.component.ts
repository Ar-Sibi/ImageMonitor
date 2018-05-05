import { Component, OnInit } from '@angular/core';
import { MonitorService } from '../monitor.service';
import { Activity } from '../activity';
import { ActivatedRoute,Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-main-images',
  templateUrl: './main-images.component.html',
  styleUrls: ['./main-images.component.css']
})
export class MainImagesComponent implements OnInit {
  
  name:string;
  enterTime:string;
  isHovering=false;

  constructor(private imageMonitor: MonitorService,
    private route:ActivatedRoute,
    private router:Router,
    private location:Location
  ) { }

  clickAction(id:number){
    this.isHovering=false;
    this.enterTime=new Date().toUTCString();
    let activity:Activity ={
      action:"click",
      endtime: this.enterTime,
      starttime:  this.enterTime,
      target:id
    }
    this.imageMonitor.postActivity(this.name,activity)
  }
  enterAction(id: number) {
    this.enterTime=new Date().toUTCString();
    this.isHovering=true;
  }

  exitAction(id: number) {
    if(this.isHovering){
      let activity:Activity ={
        action:"hover",
        endtime: new Date().toUTCString(),
        starttime:this.enterTime,
        target:id
      }
      console.log(activity);
      this.isHovering=false;
      this.imageMonitor.postActivity(this.name,activity)
    }
  }
  redirectToAdmin(){
    this.router.navigateByUrl(`/${this.name}/admin`);
  }
  redirectToHome(){
    this.router.navigateByUrl(`/`);
  }
  ngOnInit() {
    this.name=this.route.snapshot.paramMap.get('id');
  }

}
