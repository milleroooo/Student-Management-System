import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { DataService } from '../services/data.service';
import { ActivatedRoute } from '@angular/router';
import { Mark } from '../modal/mark';

@Component({
  selector: 'app-show-mark',
  templateUrl: './show-mark.component.html',
  styleUrls: ['./show-mark.component.css']
})
export class ShowMarkComponent {
  markObj: any;
  id: any;
  studentObj: any;

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
  markType:string='';
  date:string='';


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.OnGotAllMarks();
    this.getMarkView();
    this.getStudentView();
  }

  OnGotAllMarks() {
    this.DataService.getAllMarks(this.id).subscribe(
      {
        next: (res) => this.markList = res.map((e: any) => {
          const data = e.payload.doc.data();
          data.id = e.payload.doc.id;
          return data;
        }),
        error: (err) => console.log(err),
        complete: () => console.log("completed")
      });
  }
  getStudentView() {
    this.DataService.getStudentById(this.id).subscribe(data => {
      this.studentObj = data;
    })
  }

  getMarkView() {
    this.DataService.getMarksById(this.id).subscribe(data => {
      this.markObj = data;
      console.log(this.markObj);
    })
  }

  OnUserLogout(){
    this.auth.logout();
  }

  OnAddedMark() {
    if (this.mark == '') {
      console.log('Please select');
      return;
    }
    this.markObaj.mark = this.mark;
    this.markObaj.markType = this.markType;
    this.markObaj.description = this.description;
    this.DataService.addMark(this.markObaj, this.id);
    console.log(this.markObaj);
    //console.warn("Student added:" + this.studentObj.first_name + ' ' + this.studentObj.last_name)
  }
  OnDeletedMark(){
    this.DataService.deleteMark(this.markObaj,this.id);
    console.log('deleted:' + this.OnDeletedMark)
  }

}
