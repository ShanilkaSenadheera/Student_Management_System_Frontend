import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular'; // Import cell rendering components
import { ICellRendererParams } from 'ag-grid-community';  // Import cell rendering parameters
import { Student } from 'src/app/student';
import { StudentOperationsService } from 'src/app/student-operations.service';
import { Reception } from 'src/app/reception';
import { ReceptionService } from 'src/app/reception.service';
import { Router } from '@angular/router';
import { TeacherService } from 'src/app/teacher.service';
import { Teacher } from 'src/app/teacher';
import { AgGridAngular } from 'ag-grid-angular';
import { GridApi } from 'ag-grid-community';

@Component({
  selector: 'app-more-info-button',
  template: `
    <button type="button" class="btn btn-outline-secondary mr-2" data-bs-toggle="dropdown" aria-expanded="false" placement="bottom"
      [ngbPopover]="popContent" container="body">
      <i class="fa-sharp fa-solid fa-info"></i></button>
    <ng-template #popContent>
    <ul class="dropdown-menu" *ngIf="true">
      <li><a class="dropdown-item" [routerLink]="['/enrollment-info', data.studentId]">Enrollment</a></li>
      <li><a class="dropdown-item" [routerLink]="['/attendance-info', data.studentId]">Attendence</a></li>
      <li><a class="dropdown-item" [routerLink]="['/class-payment-info', data.studentId]">Payment</a></li>
      <li><hr class="dropdown-divider"></li>
      <li class="dropdown-item dropdown-toggle"> Action</li>
      <li class="dropdown-item"><button (click)="studentData(data.studentId, data.parentNic)"><i class="fa-sharp fa-solid fa-eye dropTwoIcon"></i>View</button></li>
      <li class="dropdown-item"><button (click)="updateStudent(data.studentID)"><i class="fa-solid fa-pen dropTwoIcon"></i>Update</button></li>
      <li class="dropdown-item"><button (click)="deleteStudent(data.studentID)"><i class="fa-solid fa-trash dropTwoIcon"></i>Remove</button></li>
    </ul>

    <ul class="dropdown-menu" *ngIf= "data.enrollmentId">
    <li class="dropdown-item"><button  (click)="classData(data.classId, data.teacherId)">Class Info</button></li>
    <li class="dropdown-item"><button  (click)="teacherData(data.teacherId)">Teacher Info</button></li>
    </ul>

    <ul class="dropdown-menu" *ngIf= "data.classId && !data.enrollmentId">
    <li class="dropdown-item"><button  (click)="classData(data.classId, data.teacherId)">Class Info</button></li>
    </ul>

    <ul class="dropdown-menu" *ngIf="data.receptionID && !data.teacherID" >
      <li class="dropdown-item"><button (click)="receptionData(data.receptionId)"><i class="fa-sharp fa-solid fa-eye dropTwoIcon"></i>View</button></li>
      <li class="dropdown-item"><button (click)="updateReception(data.receptionId)"><i class="fa-solid fa-pen dropTwoIcon"></i>Update</button></li>
      <li class="dropdown-item"><button (click)="deleteReception(data.receptionId)" ><i class="fa-solid fa-trash dropTwoIcon"></i>Remove</button></li>
    </ul>

    <ul class="dropdown-menu" *ngIf="data.teacherID && !data.receptionID" >
      <li class="dropdown-item"><button (click)="teacherData(data.teacherId)"><i class="fa-sharp fa-solid fa-eye dropTwoIcon"></i>View</button></li>
      <li class="dropdown-item"><button (click)="updateTeacher(data.teacherId)"><i class="fa-solid fa-pen dropTwoIcon"></i>Update</button></li>
      <li class="dropdown-item"><button (click)="deleteTeacher(data.teacherId)"><i class="fa-solid fa-trash dropTwoIcon"></i>Remove</button></li>
    </ul>

</ng-template>
  `,
  styles: [
  ]
})
export class MoreInfoButtonComponent implements OnInit, ICellRendererAngularComp{

  data: any;

  // get table timestamp row data
  agInit(params: any): void {
    this.data = params.data || null;
    console.log(this.data);
  }

  refresh(): boolean {
    return true;
  }

  
  receptions!: Reception[];
  teachers!: Teacher[];
  students!: Student[];

  constructor(private studentOperationsService: StudentOperationsService,
    private teacherService: TeacherService,
    private receptionService: ReceptionService,
    private router: Router){}


    ngOnInit(): void {
      this.getReceptions();
      this.getStudents();
    }
  // navigate to the relevent Student data
  studentData(studentId: number, parentNic: String){
    this.router.navigate(['student-data', studentId, parentNic]);
  }

  // navigate to the relevent Class data
  classData(classId: String, teacherId: String){
    this.router.navigate(['class-data', classId, teacherId]);
  }

  // navigate to the relevent Teacher data
  teacherData(teacherId: String){
    this.router.navigate(['teacher-data', teacherId]);
  }

  
  // navigate to the relevent Reception data
  receptionData(teacherId: String){
    this.router.navigate(['teacher-data', teacherId]);
  }
  
  deleteReception(id: number){
    this.receptionService.deleteReception(id).subscribe(data =>{
      console.log(data);
      this.getReceptions();
      window.location.reload();
    })
  }

  private getReceptions(){
    this.receptionService.getReceptionList().subscribe(data =>{
      this.receptions = data;
    });
  }

  private getTeachers(){
    this.teacherService.getTeacherList().subscribe(data =>{
      this.teachers = data;
    });
  }

  updateReception(id: number){
    this.router.navigate(['update-reception', id]);
  }
  

  deleteTeacher(id: number){
    this.teacherService.deleteTeacher(id).subscribe(data =>{
      console.log(data);
      this.getTeachers();
      window.location.reload();
    })
  }

  updateTeacher(id: number){
    this.router.navigate(['update-teacher', id]);
  }

  deleteStudent(id: number){
    this.studentOperationsService.deleteStudent(id).subscribe(data =>{
     
      this.getStudents();
      window.location.reload();
    })
  }

  updateStudent(id: number){
    this.router.navigate(['update-student', id]);
  }

  private getStudents(){
    this.studentOperationsService.getStudentList().subscribe(data =>{
      this.students = data;
    });
  }

}
