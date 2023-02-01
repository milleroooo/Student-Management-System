import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../services/auth.service';
import { DataService } from '../services/data.service';
import { Student } from '../modal/student';
import { ToastService } from '../services/toastr.service';
import { ConfirmationDialogService } from '../services/confirmation-dialog.service';

@Component({
  selector: 'app-confirmdialog',
  templateUrl: './confirm-dialog.component.html',
})
export class ConfirmDialogComponent implements OnInit {

  @Input() title: string | undefined;
  @Input() message: string | undefined;
  @Input() btnOkText: string | undefined;
  @Input() btnCancelText: string | undefined;

  constructor(private activeModal: NgbActiveModal, private auth: AuthService, private DataService: DataService,
    private toastr: ToastService, private confirmationDialogService: ConfirmationDialogService) { }
  studentsList: Student[] = [];

  selectedStudent: any;

  selectUser(Student) {
    this.selectedStudent = Student;
}

  ngOnInit(): void {
    this.OnGotAllStudents();
  }

   //notifications
   OnShowStudentDeleted() {
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

  public decline() {
    this.activeModal.close(false);
  }

  public accept(student: Student) {
    this.DataService.deleteStudent(student);
    this.OnShowStudentDeleted();
    this.activeModal.close(true);
  }

  public dismiss() {
    this.activeModal.dismiss();
  }

}
