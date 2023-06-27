import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Owner } from 'src/app/owner';
import { OwnerService } from 'src/app/owner.service';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-add-owner',
  templateUrl: './add-owner.component.html',
  styleUrls: ['./add-owner.component.css']
})
export class AddOwnerComponent implements OnInit {
  owner: Owner = new Owner();

  ownerForm!: FormGroup;
  submitted = false;
   
  ngOnInit(): void {
    this.ownerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      // lastName: ['', Validators.required],
      // email: ['', [Validators.required, Validators.email]],
      // nic: ['', Validators.required],
      // telNo: ['', Validators.required],
      // address: ['', Validators.required],
      // password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
   

  constructor(private ownerService: OwnerService,
   private router: Router,
   private formBuilder: FormBuilder){}

  
  saveOwner(){
    this.ownerService.createOwner(this.owner).subscribe(data =>{
      console.log(data);
      this.goToOwnerList();
    },
    error => console.log(error));
   }

   goToOwnerList(){
     this.router.navigate(['/owners']);
   }
   onSubmit(){
     if(this.ownerForm.invalid){
      return;
     }
     this.saveOwner();
     console.log('Successfully Registerd.');   
    }
}
