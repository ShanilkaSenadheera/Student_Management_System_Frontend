import { Component } from '@angular/core';

@Component({
  selector: 'app-manage-access',
  templateUrl: './manage-access.component.html',
  styleUrls: ['./manage-access.component.css']
})
export class ManageAccessComponent {
  permission = [
    { id: 1, adminSelect: true, ownerSelect: false, teacherSelect: false, receptionSelect: false, studentSelect: false, name: 'Manage Owners' },
    { id: 2, adminSelect: true, ownerSelect: false, teacherSelect: false, receptionSelect: false, studentSelect: false, name: 'Manage Access' },
    { id: 3, adminSelect: true, ownerSelect: false, teacherSelect: false, receptionSelect: false, studentSelect: false, name: 'System Reports' },
    { id: 4, adminSelect: true, ownerSelect: false, teacherSelect: false, receptionSelect: true, studentSelect: false, name: 'Notifications' },
    { id: 5, adminSelect: false, ownerSelect: true, teacherSelect: false, receptionSelect: true, studentSelect: false, name: 'Manage Students' },
    { id: 6, adminSelect: false, ownerSelect: true, teacherSelect: false, receptionSelect: true, studentSelect: false, name: 'Manage Staff' },
    { id: 7, adminSelect: false, ownerSelect: true, teacherSelect: false, receptionSelect: true, studentSelect: false, name: 'Manage Classes' },
    { id: 8, adminSelect: false, ownerSelect: true, teacherSelect: false, receptionSelect: true, studentSelect: false, name: 'View Payments' },
    { id: 9, adminSelect: false, ownerSelect: true, teacherSelect: false, receptionSelect: true, studentSelect: false, name: 'Payment Reports' },
    { id: 10, adminSelect: false, ownerSelect: false, teacherSelect: false, receptionSelect: true, studentSelect: false, name: 'Notification' },
    { id: 11, adminSelect: false, ownerSelect: false, teacherSelect: false, receptionSelect: true, studentSelect: false, name: 'Manage Students' },
    { id: 12, adminSelect: false, ownerSelect: false, teacherSelect: false, receptionSelect: true, studentSelect: false, name: 'Pending Approvals' },
    { id: 13, adminSelect: false, ownerSelect: false, teacherSelect: false, receptionSelect: true, studentSelect: false, name: 'Notification' },
  ];
  
  onChangePermission($event: any, item: any, column: string) {
    const isChecked = $event.target.checked;
    
    if (column === 'admin') {
      item.adminSelect = isChecked;
    } else if (column === 'owner') {
      item.ownerSelect = isChecked;
    } else if (column === 'teacher') {
      item.teacherSelect = isChecked;
    } else if (column === 'reception') {
      item.receptionSelect = isChecked;
    } else {
      item.studentSelect = isChecked;
    }
    
    console.log(this.permission);
  }

  changePermission(){
     
  }
}
