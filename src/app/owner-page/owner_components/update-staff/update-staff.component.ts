import { Component, OnInit } from '@angular/core';
import { Reception } from 'src/app/reception';
import { ReceptionService } from 'src/app/reception.service';
import { Route, ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-staff',
  templateUrl: './update-staff.component.html',
  styleUrls: ['./update-staff.component.css']
})
export class UpdateStaffComponent implements OnInit {
  id!: number;
  reception: Reception = new Reception();
  constructor(private receptionService: ReceptionService,
    private route: ActivatedRoute,
    private router: Router){}
  
  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.receptionService.getReceptionById(this.id).subscribe(data =>{
      this.reception = data;
    }, 
    error => console.log(error));
  }

  onSubmit(){
    this.receptionService.updateReception(this.id, this.reception).subscribe(data => {
      this.goToReceptionList();
    },
    error => console.log(error))
  }
  goToReceptionList(){
    this.router.navigate(['/receptions']);
  }
}
