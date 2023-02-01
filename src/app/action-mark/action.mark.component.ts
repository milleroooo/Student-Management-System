import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Student } from '../modal/student';
import { DataService } from '../services/data.service';
import { ToastService } from '../services/toastr.service';

@Component({
  selector: 'app-add-mark',
  templateUrl: './action-mark.component.html',
  styleUrls: ['./action-mark.component.css']
})
export class ActionMarkComponent {

  studentsList: Student[] = [];
  studentObj: Student = {
    id: '',
    first_name: '',
    last_name: '',
    age: '',
    email: '',
    phone_number: '',
    gender: '',
    image: '',
    proffesion: '',
    location: '',
    mark: ''
  };

  mark: string = '';


  constructor(private auth: AuthService, private DataService : DataService, private toastr: ToastService) { }

  ngOnInit(): void {
    this.OnGotAllStudents();
  }

  OnGotAllStudents()  {

    this.DataService.getAllStudents().subscribe(
      {
      next: (res) => this.studentsList = res.map((e: any) => {
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;
        return data;
      }),
      error: (err) => console.log(err),   // errorHandler
      complete: () => console.log("completed")
    });
  }

  OnUserLogout() {
    this.auth.logout();
  }

  OnResetedForm(){
    this.mark = ''
  }

  OnAddedMark() {
    if (this.mark == '') {
      console.log('Please select');
      return;
    }
    this.studentObj.mark = this.mark;
    this.DataService.addStudent(this.studentObj);
    this.OnResetedForm();
    //console.warn("Student added:" + this.studentObj.first_name + ' ' + this.studentObj.last_name)
  }//ocena sie dodaje wraz ze zmienna ale tworzy sie nowy uzytkownik    PROBLEM
}
