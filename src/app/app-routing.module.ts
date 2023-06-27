import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentClassesComponent } from './student-page/student_components/student-classes/student-classes.component';
import { StudentDashboardComponent } from './student-page/student_components/student-dashboard/student-dashboard.component';
import { StudentEnrollComponent } from './student-page/student_components/student-enroll/student-enroll.component';
import { StudentNotificationComponent } from './student-page/student_components/student-notification/student-notification.component';
import { StudentPaymentsComponent } from './student-page/student_components/student-payments/student-payments.component';
import { StudentProfileComponent } from './student-page/student_components/student-profile/student-profile.component';
import { ReceptionDashboardComponent } from './reception-page/reception_components/reception-dashboard/reception-dashboard.component';
import { ReceptionProfileComponent } from './reception-page/reception_components/reception-profile/reception-profile.component';
import { PendingApprovalsComponent } from './reception-page/reception_components/pending-approvals/pending-approvals.component';
import { RecordPaymentComponent } from './reception-page/reception_components/record-payment/record-payment.component';
import { TimeTablesComponent } from './reception-page/reception_components/time-tables/time-tables.component';
import { MarkAttendanceComponent } from './reception-page/reception_components/mark-attendance/mark-attendance.component';
import { ChangeClassFeesComponent } from './reception-page/reception_components/change-class-fees/change-class-fees.component';
import { IssueTutesComponent } from './reception-page/reception_components/issue-tutes/issue-tutes.component';
import { ReceptionNotificationsComponent } from './reception-page/reception_components/reception-notifications/reception-notifications.component';
import { AddReceptionComponent } from './owner-page/owner_components/add-reception/add-reception.component';
import { ManageStaffComponent } from './owner-page/owner_components/manage-staff/manage-staff.component';
import { ManageAccessComponent } from './admin-page/admin_components/manage-access/manage-access.component';
import { ManageStudentsComponent } from './owner-page/owner_components/manage-students/manage-students.component';
import { OwnerProfileComponent } from './owner-page/owner_components/owner-profile/owner-profile.component';

const routes: Routes = [

  // paths for student components
  {path:'student-class', component:StudentClassesComponent},
  {path:'student-dashboard', component:StudentDashboardComponent},
  {path:'student-enroll', component:StudentEnrollComponent},
  {path:'student-notification', component:StudentNotificationComponent},
  {path:'student-paymentInfo', component:StudentPaymentsComponent},
  {path:'student-profile', component:StudentProfileComponent},
  // end paths for student components

  // paths for reception components
  {path:'reception-dashboard', component:ReceptionDashboardComponent},
  {path: 'reception-profile', component:ReceptionProfileComponent},
  {path: 'manage-students', component:ManageStudentsComponent},
  {path: 'pending-approvals', component:PendingApprovalsComponent},
  {path: 'record-payment', component:RecordPaymentComponent},
  {path: 'time-tables', component:TimeTablesComponent},
  {path: 'mark-attendance', component:MarkAttendanceComponent},
  {path: 'change-class-fees', component:ChangeClassFeesComponent},
  {path: 'issue-tutes', component:IssueTutesComponent},
  {path: 'reception-notifications', component:ReceptionNotificationsComponent},
  {path: 'manage-staff', component:ManageStaffComponent},
  {path: 'manage-student', component:ManageStudentsComponent},
  // end paths for reception components

  {path:'add-reception', component: AddReceptionComponent},
  {path:'owner-profile', component:OwnerProfileComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
