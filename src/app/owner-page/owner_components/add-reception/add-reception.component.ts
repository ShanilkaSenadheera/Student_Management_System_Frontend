import { Component, OnInit } from '@angular/core';
import { Reception } from 'src/app/reception';
import { ReceptionService } from 'src/app/reception.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-reception',
  templateUrl: './add-reception.component.html',
  styleUrls: ['./add-reception.component.css']
})
export class AddReceptionComponent implements OnInit {
  reception: Reception = new Reception();
   
   constructor(private receptionService: ReceptionService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  saveReception() {
    this.receptionService.createReception(this.reception).subscribe(
      data => {
        console.log(data);
        this.goToReceptionList();
      },
      error => console.log(error)
    );
  }

  goToReceptionList() {
    this.router.navigate(['/receptions']);
  }

  receptionForm!: FormGroup;
  submitted = false;

  ngOnInit() {
    this.receptionForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      nic: ['', Validators.required],
      telNo: ['', [Validators.required]],
      address: ['', Validators.required],
      salary: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.receptionForm.invalid) {
      return;
    }
    this.saveReception();
    alert('Successfully Registerd.');
  }
}
