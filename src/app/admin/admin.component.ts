import { Component, OnInit } from '@angular/core';
import { MonitorService } from '../monitor.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  activities: string[];
  constructor(private imageMonitor: MonitorService,
    private route:ActivatedRoute,
    private location:Location
  ) {
  }

  ngOnInit() {
    this.imageMonitor.getActivity(this.route.snapshot.paramMap.get('id')).subscribe( activities => {this.activities=activities;console.log(activities);return activities });
  }

}
