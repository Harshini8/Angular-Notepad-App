import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {Router} from '@angular/router';
@Component({
  selector: 'app-close-dialog',
  templateUrl: './close-dialog.component.html',
  styleUrls: ['./close-dialog.component.css']
})
export class CloseDialogComponent {

  constructor(private dialogRef: MatDialogRef<CloseDialogComponent>,private Router:Router) { }

 yes()
 {
  this.dialogRef.close();
  this.Router.navigate(["/home"])
 }
 No()
 {
   this.dialogRef.close();
 }
}
