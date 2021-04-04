import { Component, OnInit,Inject } from '@angular/core';
import {MatDialogConfig,MatDialogRef,MAT_DIALOG_DATA} from '@angular/material/dialog'
@Component({
  selector: 'app-full-note',
  templateUrl: './full-note.component.html',
  styleUrls: ['./full-note.component.css']
})
export class FullNoteComponent{
  id:number;
  title:string;
  body:string;
  modifiedDate;
  createdDate:Date;
  categories;
  color;
  valid:boolean;
  index:number;
  constructor(private dialogRef:MatDialogRef<FullNoteComponent>, @Inject(MAT_DIALOG_DATA) data) {
    console.log(data,"dialog")
    this.title=data["title"];
    this.body=data["body"];
    this.categories=data["categories"];
    this.id=data["id"];
    this.createdDate=data["createdDate"];
    this.color=data["color"];
    this.modifiedDate=data["modifiedDate"]
   }
}
