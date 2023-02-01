import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Mark } from '../modal/mark';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})
export class ViewStudentComponent implements OnInit {
  studentObj: any;
  markObj: any;
  id: any;

  constructor(private DataService: DataService, private route: ActivatedRoute, private auth: AuthService) { }

  markList: Mark[] = [];
  markObaj: Mark = {
   mark:'',
   markType:'',
   description:'',
   date:''
  }

  mark: string = '';
  description:string='';

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.getStudentView();
  }

  getStudentView() {
    this.DataService.getStudentById(this.id).subscribe(data => {
      this.studentObj = data;
    })
  }

  OnUserLogout(){
    this.auth.logout();
  }
}
