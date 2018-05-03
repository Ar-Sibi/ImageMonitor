import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { MainImagesComponent } from './main-images/main-images.component';
import { AppRoutingModule } from './app-routing.module';
import { MainHomeComponent } from './main-home/main-home.component';

//import { MonitorService } from './monitor.service';


@NgModule({
  declarations: [
    AppComponent,
    MainImagesComponent,
    MainHomeComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
