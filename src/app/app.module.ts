import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { FacultyComponent } from './faculty/faculty.component';
import { HomeComponent } from './home/home.component';
import { RequirementsComponent } from './requirements/requirements.component';

import { HttpClientModule } from '@angular/common/http';
import { AddashComponent } from './addash/addash.component';
import { FacdashComponent } from './facdash/facdash.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    FacultyComponent,
    HomeComponent,
    RequirementsComponent,
    AddashComponent,
    FacdashComponent,
    
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
