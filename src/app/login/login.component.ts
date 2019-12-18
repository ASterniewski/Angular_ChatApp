import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  name: string;
  surname: string;
  password: string;

  constructor(public dialogRef: MatDialogRef<LoginComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
  }

login() : void {
  if(this.name === 'Andrzej' && this.surname === 'S' && this.password === '1234') {
    // alert("Correct data, you're logged in");
    this.dialogRef.close(alert(`Welcome back ${this.name}!`));
  } else {
    alert("Wrong data. Try again.");
  }
}
}
