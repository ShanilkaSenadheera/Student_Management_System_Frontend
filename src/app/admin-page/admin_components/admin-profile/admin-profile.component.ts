import { Component } from '@angular/core';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent {
  openFirstName(){
    const modelDiv = document.getElementById('myModal1');
    if(modelDiv!= null){
    modelDiv.style.display = 'block';
    }
  }
  closeFirstName() {
    const modelDiv = document.getElementById('myModal1');
    if (modelDiv != null) {
      modelDiv.style.display = 'none';
    }
  }

  openLastName(){
    const modelDiv = document.getElementById('myModal2');
    if(modelDiv!= null){
    modelDiv.style.display = 'block';
    }
  }
  closeLastName() {
    const modelDiv = document.getElementById('myModal2');
    if (modelDiv != null) {
      modelDiv.style.display = 'none';
    }
  }

  openPassword(){
    const modelDiv = document.getElementById('myModal3');
    if(modelDiv!= null){
    modelDiv.style.display = 'block';
    }
  }
  closePassword() {
    const modelDiv = document.getElementById('myModal3');
    if (modelDiv != null) {
      modelDiv.style.display = 'none';
    }
  }
  
  openPhoneNumber(){
    const modelDiv = document.getElementById('myModal4');
    if(modelDiv!= null){
    modelDiv.style.display = 'block';
    }
  }
  closePhoneNumber() {
    const modelDiv = document.getElementById('myModal4');
    if (modelDiv != null) {
      modelDiv.style.display = 'none';
    }
  }

  openAddress(){
    const modelDiv = document.getElementById('myModal5');
    if(modelDiv!= null){
    modelDiv.style.display = 'block';
    }
  }
  closeAddress() {
    const modelDiv = document.getElementById('myModal5');
    if (modelDiv != null) {
      modelDiv.style.display = 'none';
    }
  }

}
