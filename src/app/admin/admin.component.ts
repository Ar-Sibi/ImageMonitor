import { Component, OnInit } from '@angular/core';
import { MonitorService } from '../monitor.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Activity } from '../activity';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  activities: Activity[];
  countArray: number[];
  constructor(private imageMonitor: MonitorService,
    private route:ActivatedRoute,
    private location:Location
  ) {
  }
  page(pageno){
    this.imageMonitor.getActivityPaginated(this.route.snapshot.paramMap.get('id'),10*pageno).subscribe( activities => {this.activities=activities;console.log(activities);return activities });
  }

  ngOnInit() {

    this.imageMonitor.getCount(this.route.snapshot.paramMap.get('id')).subscribe(num=>{console.log(num);this.countArray=Array.apply(null, {length: ((+num-1)/10)+1}).map(Number.call, Number)})
    this.imageMonitor.getActivityPaginated(this.route.snapshot.paramMap.get('id'),0).subscribe( activities => {this.activities=activities;console.log(activities);return activities });
  }

}
