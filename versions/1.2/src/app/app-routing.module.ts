import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { StudentListComponent } from './student-list/student-list.component';
import { AddMarkComponent } from './add-mark/add-mark.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { ViewStudentComponent } from './view-student/view-student.component';

const routes: Routes = [
  {path: '', redirectTo: 'login',pathMatch:'full'},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'forgotPassword', component: ForgotPasswordComponent},
  {path: 'addStudent', component: AddStudentComponent},
  {path: 'studentList', component: StudentListComponent},
  {path: 'addMark', component: AddMarkComponent},
  {path: 'dialog', component: ConfirmDialogComponent},
  {path: 'view-student', component: ViewStudentComponent},
  {path: 'view-student/:id', component: ViewStudentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
