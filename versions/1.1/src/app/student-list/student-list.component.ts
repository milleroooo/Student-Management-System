import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { DataService } from '../services/data.service';
import { Student } from '../modal/student';
import { ToastService } from '../services/toastr.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  studentsList : Student[] = [];

  constructor(private auth: AuthService, private DataService : DataService, private toastr: ToastService) { }

  ngOnInit(): void {
    this.OnGotAllStudents();
  }
  OnUserLogout(){
    this.auth.logout();
  }

 //notifications
OnShowStudentDeleted(){
   this.toastr.showStudentDeleteSucces();
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

  OnDeletedStudent(student : Student) {
    if(window.confirm('no zobaczymy' + student.first_name + " " + student.last_name)){
    this.DataService.deleteStudent(student);
    this.OnShowStudentDeleted();
    }
  }

  updateStudent() {

  }
}
// 1.zrobic ladne student-list
// 1.5 ogarnac comfirmation-dialog
// 2.zakladka best-student do ogarniecia  (show details potem wraz z punktem 4(view))
// 3.w dashboardzie ogarnac karty interpolacja
// 4.karta profilowa ucznia: edit-student, view-student
// 5.marks component - dodawanie ocen do kazdego z uczniow (zrobic kolejna liste i dodawac ta zmienna do istniejacych juz danych i ja wyswietlic)
