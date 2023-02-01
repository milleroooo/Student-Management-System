import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { Student } from '../modal/student';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private afs : AngularFirestore, private fireStorage : AngularFireStorage) { }
   //afs - AngularFirestore (Firebase variable)
  studentsList: Student[] = [];


   //add student
   addStudent(student : Student) {
    student.id = this.afs.createId();
    if(!this.studentsList.includes(student)){
      this.studentsList.push(student);
      }
      else {
        console.warn('uzytkownik juz istnieje');
      }
      return this.afs.collection('/Students').add(student);
  }

  //get all students
  getAllStudents() {
    return this.afs.collection('/Students').snapshotChanges();
  }

  //delete student
  deleteStudent(student : Student) {
    if(this.studentsList.indexOf(student) !== -1){
      const index: number = this.studentsList.indexOf(student);
      const removed = this.studentsList.splice(index, 1);
      console.warn("Removed student: " + removed);
    }
    this.afs.doc('/Students/'+student.id).delete();
  }



  //update student
  updateStudent(student : Student) {
    this.deleteStudent(student);
    this.addStudent(student);
  }
}
