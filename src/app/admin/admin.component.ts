import { Component, OnInit } from '@angular/core';
import { MonitorService } from '../monitor.service';
import { ActivatedRoute , Router } from '@angular/router';
import { Location } from '@angular/common';
import { Activity } from '../activity';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  name:string;
  currentPage=-1;
  activities: Activity[];
  isLoaded=false;
  countArray: number[] = [];
  constructor(private imageMonitor: MonitorService,
    private route: ActivatedRoute,
    private router:Router,
    private location: Location
  ) {
  }
  page(pageno) {
    this.currentPage=pageno+1;
    this.imageMonitor.getActivityPaginated(this.name, 10 * pageno).subscribe(activities => { this.activities = activities; console.log(activities); return activities });
  }

  previousPage(){
    if(this.currentPage>1){
      this.currentPage--;
      this.page(this.currentPage-1);
    }
  }

  nextPage(){
    console.log(this.countArray.length);
    if(this.currentPage<=this.countArray.length-1){
      this.page(this.currentPage);
    }
  }
  
  redirectToImages(){
    this.router.navigateByUrl(`/${this.name}`)
  }

  redirectToHome(){
    this.router.navigateByUrl(`/`)
  }

  ngOnInit() {
    this.name=this.route.snapshot.paramMap.get('id');
    this.imageMonitor.getCount(this.name).subscribe(num => { console.log(num); this.countArray = Array.apply(null, { length: ((+num - 1) / 10) + 1 }).map(Number.call, Number) })
    this.imageMonitor.getActivityPaginated(this.name, 0).subscribe(activities => { this.activities = activities ; this.currentPage=1; console.log(activities);this.isLoaded=true; return activities });
  }

}
