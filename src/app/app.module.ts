import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentPageComponent } from './student-page/student-page.component';
import { StudentDashboardComponent } from './student-page/student_components/student-dashboard/student-dashboard.component';
import { AccountInfoComponent } from './account-info/account-info.component';
import { ReceptionPageComponent } from './reception-page/reception-page.component';
import { TeacherPageComponent } from './teacher-page/teacher-page.component';
import { OwnerPageComponent } from './owner-page/owner-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { StudentProfileComponent } from './student-page/student_components/student-profile/student-profile.component';
import { StudentClassesComponent } from './student-page/student_components/student-classes/student-classes.component';
import { StudentEnrollComponent } from './student-page/student_components/student-enroll/student-enroll.component';
import { StudentPaymentsComponent } from './student-page/student_components/student-payments/student-payments.component';
import { StudentNotificationComponent } from './student-page/student_components/student-notification/student-notification.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReceptionDashboardComponent } from './reception-page/reception_components/reception-dashboard/reception-dashboard.component';
import { ReceptionProfileComponent } from './reception-page/reception_components/reception-profile/reception-profile.component';
import { PendingApprovalsComponent } from './reception-page/reception_components/pending-approvals/pending-approvals.component';
import { RecordPaymentComponent } from './reception-page/reception_components/record-payment/record-payment.component';
import { TimeTablesComponent } from './reception-page/reception_components/time-tables/time-tables.component';
import { MarkAttendanceComponent } from './reception-page/reception_components/mark-attendance/mark-attendance.component';
import { ChangeClassFeesComponent } from './reception-page/reception_components/change-class-fees/change-class-fees.component';
import { IssueTutesComponent } from './reception-page/reception_components/issue-tutes/issue-tutes.component';
import { ReceptionNotificationsComponent } from './reception-page/reception_components/reception-notifications/reception-notifications.component';
import { AdminProfileComponent } from './admin-page/admin_components/admin-profile/admin-profile.component';
import { ManageAccessComponent } from './admin-page/admin_components/manage-access/manage-access.component';
import { OwnerProfileComponent } from './owner-page/owner_components/owner-profile/owner-profile.component';
import { TeacherProfileComponent } from './teacher-page/teacher_components/teacher-profile/teacher-profile.component';
import { ManageStaffComponent } from './owner-page/owner_components/manage-staff/manage-staff.component';
import { AddReceptionComponent } from './owner-page/owner_components/add-reception/add-reception.component';
import { AddTeacherComponent } from './owner-page/owner_components/add-teacher/add-teacher.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddOwnerComponent } from './admin-page/admin_components/add-owner/add-owner.component';
import { MoreInfoButtonComponent } from './owner-page/owner_components/more-info-button/more-info-button.component';
import { AgGridModule } from 'ag-grid-angular';
import { CommonModule } from '@angular/common';
import { ManageStudentsComponent } from './owner-page/owner_components/manage-students/manage-students.component';
import { UpdateStaffComponent } from './owner-page/owner_components/update-staff/update-staff.component';
import { ReceptionProfileService } from './reception-profile.service';


@NgModule({
  declarations: [
    AppComponent,
    StudentPageComponent,
    StudentDashboardComponent,
    AccountInfoComponent,
    ReceptionPageComponent,
    TeacherPageComponent,
    OwnerPageComponent,
    AdminPageComponent,
    StudentProfileComponent,
    StudentClassesComponent,
    StudentEnrollComponent,
    StudentPaymentsComponent,
    StudentNotificationComponent,
    ReceptionDashboardComponent,
    ReceptionProfileComponent,
    PendingApprovalsComponent,
    RecordPaymentComponent,
    TimeTablesComponent,
    MarkAttendanceComponent,
    ChangeClassFeesComponent,
    IssueTutesComponent,
    ReceptionNotificationsComponent,
    AdminProfileComponent,
    ManageAccessComponent,
    OwnerProfileComponent,
    TeacherProfileComponent,
    ManageStaffComponent,
    AddReceptionComponent,
    AddTeacherComponent,
    AddOwnerComponent,
    MoreInfoButtonComponent,
    ManageStudentsComponent,
    UpdateStaffComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    AgGridModule,
    CommonModule
  ],
  providers: [ReceptionProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
