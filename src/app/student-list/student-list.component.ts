import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { DataService } from '../services/data.service';
import { Student } from '../modal/student';
import { ToastService } from '../services/toastr.service';
import { ConfirmationDialogService } from '../services/confirmation-dialog.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  studentsList: Student[] = [];

  constructor(private auth: AuthService,
              private DataService: DataService,
              private toastr: ToastService,
              private confirmationDialogService: ConfirmationDialogService) { }

  ngOnInit(): void {
    this.OnGotAllStudents();
  }
  OnUserLogout() {
    this.auth.logout();
  }

  //notifications
  OnShowStudentDeleted() {
    this.toastr.showStudentDeleteSucces();
  }

  OnGotAllStudents() {

    this.DataService.getAllStudents().subscribe(
      {
        next: (res) => this.studentsList = res.map((e: any) => {
          const data = e.payload.doc.data();
          data.id = e.payload.doc.id;
          return data;
        }),
        error: (err) => console.log(err),
        complete: () => console.log("completed")
      });
  }

  OnDeletedStudent(student: Student) {
    if (window.confirm('Are you sure you want to delete' + " " + student.first_name + " " + student.last_name + "?")) {
      this.DataService.deleteStudent(student);
      this.OnShowStudentDeleted();
    }
  }

  public openConfirmationDialog() {
    this.confirmationDialogService.confirm('Please confirm..', 'Do you really want to delete this student ?')
      .then((confirmed) => console.log('User confirmed:', confirmed))
      .catch(() => console.log('User dismissed the dialog (e.g., by using ESC, clicking the cross icon, or clicking outside the dialog)'));
  }
}
