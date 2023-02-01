import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.css']
})
export class ViewStudentComponent implements OnInit {
  studentObj: any;
  id: any;

  constructor(private DataService: DataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.getStudentView();
  }

  getStudentView() {
    this.DataService.getStudentById(this.id).subscribe(data => {
      this.studentObj = data;
    })
  }

}
