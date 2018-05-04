import { Component, OnInit } from '@angular/core';
import { MonitorService } from '../monitor.service';
import { Activity } from '../activity';
import { ActivatedRoute } from '@angular/router';
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
    console.log(this.name);
    console.log(activity);
    this.imageMonitor.postActivity(this.name,activity)
  }
  enterAction(id: number) {
    console.log("wtgasdasd");
    this.enterTime=new Date().toUTCString();
    this.isHovering=true;
  }

  exitAction(id: number) {
    console.log("wtgasdasdasdlksandklasndklnaklsdn");
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
  ngOnInit() {
    this.name=this.route.snapshot.paramMap.get('id');
    console.log(this.name);
  }

}
