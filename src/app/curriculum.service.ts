import { Injectable } from '@angular/core';
import { requirementModel } from './requirements/requirements.model';
import { HttpClient } from '@angular/common/http';
import { AdminComponent } from './admin/admin.component';
import { AdminModel } from './admin/admin.model';
import { FacultyModel } from './faculty/faculty.model';
@Injectable({
  providedIn: 'root'
})
export class CurriculumService {

  constructor(private http:HttpClient) { }  


Adminlogin(item:AdminModel){
  console.log(item);
  return this.http.get('http://localhost:4300/requirements')

}

 
}

