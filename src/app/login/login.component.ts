import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


}



// constructor(private router: Router) { }

// name: string;
// surname: string;
// password: string;

// ngOnInit() {
// }

// login() : void {
//   if(this.name === 'Andrzej' && this.surname === 'Sterniewski' && this.password === '1234') {
//     this.router.navigate(["user"]);
//   } else {
//     alert("Wrong data. Try again.");
//   }
// }

// }
