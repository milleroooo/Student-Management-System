import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Student } from '../modal/student';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-add-mark',
  templateUrl: './add-mark.component.html',
  styleUrls: ['./add-mark.component.css']
})
export class AddMarkComponent {

  studentsList : Student[] = [];

  constructor(private auth: AuthService, private DataService : DataService) { }

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
}
