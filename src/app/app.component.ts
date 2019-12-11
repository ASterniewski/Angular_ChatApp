import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chat';

constructor(public dialog: MatDialog) {}

  openDialog(): void {
    let dialogRef = this.dialog.open(LoginComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
    });
  }
}
