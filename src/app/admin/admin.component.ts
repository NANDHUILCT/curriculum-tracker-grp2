import { Component } from '@angular/core'; 
import { Router } from '@angular/router'; 
import { AdminModel } from './admin.model';
import { CurriculumService } from '../curriculum.service';

import { HttpClient } from '@angular/common/http';
@Component({ 
  selector: 'app-admin', 
  templateUrl: './admin.component.html', 
  styleUrls: ['./admin.component.css'] 
}) 
export class AdminComponent { 
  username: string = ''; 
  password: string = ''; 

  constructor(private curriculumService:CurriculumService,
    private router: Router) { } 
  
admin = new AdminModel('','')


  Adminlogin(){
    this.curriculumService.Adminlogin(this.admin);

    this.router.navigate(["/"]);
  }



  
}
