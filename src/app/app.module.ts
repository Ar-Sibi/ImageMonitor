import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { MainImagesComponent } from './main-images/main-images.component';
import { AppRoutingModule } from './app-routing.module';
import { MainHomeComponent } from './main-home/main-home.component';
import { AdminComponent } from './admin/admin.component';
import { MonitorService } from './monitor.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MainImagesComponent,
    MainHomeComponent,
    AdminComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [MonitorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
