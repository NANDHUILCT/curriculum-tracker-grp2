import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FacultyModel } from './faculty.model';
import { CurriculumService } from '../curriculum.service';
@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css']
})
export class FacultyComponent {
  
  username: string = ''; 
  password: string = '';
  confirmpassword: string = '';
  phoneno: number = 0; 
 
  constructor(private curriculumService:CurriculumService,
    private router: Router) {} 

    faculty = new FacultyModel('','','',0)
signup(){
 // this.curriculumService.signup(this.faculty);
  this.router.navigate(["/"]);
}
  

}

 