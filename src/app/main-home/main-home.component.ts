import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'app-main-home',
  templateUrl: './main-home.component.html',
  styleUrls: ['./main-home.component.css']
})
export class MainHomeComponent implements OnInit {
  @Input() inputString: string;
  constructor(private router: Router) { }
  go() {
    this.router.navigateByUrl(`/${this.inputString}`)
  }
  ngOnInit() {
  }

}
