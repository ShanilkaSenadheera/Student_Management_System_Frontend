import { Component, OnInit } from '@angular/core';
import { Teacher } from 'src/app/teacher';
import { TeacherService } from 'src/app/teacher.service';
import { Router } from '@angular/router';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.css']
})
export class AddTeacherComponent implements OnInit{
  teacher : Teacher = new Teacher();

  teacherForm!: FormGroup;
  submitted = false;
   
  constructor(private teacherService : TeacherService,
   private router: Router,
   private formBuilder: FormBuilder){}

  ngOnInit(): void {
    this.teacherForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      nic: ['', Validators.required],
      mobileNumber: ['', [Validators.required]],
      address: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  
  saveTeacher(){
   this.teacherService.createTeacher(this.teacher).subscribe(data =>{
     console.log(data);
     this.goToTeacherList();
   },
   error => console.log(error));
  }

  goToTeacherList(){
    this.router.navigate(['/teachers']);
  }
  onSubmit() {
    this.submitted = true;
    if (this.teacherForm.invalid) {
      return;
    }
    alert('Successfully Registered.');
  }
}
