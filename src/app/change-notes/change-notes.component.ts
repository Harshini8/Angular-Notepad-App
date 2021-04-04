import { Component, OnInit } from '@angular/core';
import { NotesService } from '../notes.service';
import { Router,ActivatedRoute } from '@angular/router';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import { CloseDialogComponent } from '../close-dialog/close-dialog.component';
import { switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-change-notes',
  templateUrl: './change-notes.component.html',
  styleUrls: ['./change-notes.component.css']
})
export class ChangeNotesComponent{
  id:number;
  title:string;
  body:string;
  modifiedDate;
  createdDate:Date;
  categories;
  color;
  valid:boolean;
  index:number;
  state:boolean;
  notes;
  constructor(private NotesService:NotesService,private Router:Router,private dialog: MatDialog,private route: ActivatedRoute) {
    if(Router.url == "/add")
    {
      console.log("Add")
    this.state=true;
    }
    else{
      this.id = +this.route.snapshot.paramMap.get('id');
      console.log(this.id,"in edit")
      this.notes=JSON.parse(localStorage.getItem("notes") || "[]");
      for (var i=0;i<this.notes.length;i++)
        {
        if(this.notes[i]["id"]==this.id)
          {
           var id1=i;
           break
          }
        }
        this.title=this.notes[id1]["title"]
        this.body=this.notes[id1]["body"]
        this.categories=this.notes[id1]["categories"]
        this.createdDate=this.notes[id1]["createdDate"]
        this.color=this.notes[id1]["color"]
    }
   }
   onSavebutton()
   {
     if(this.categories=="Work")
   {
     this.color="cadetblue"
   }
   else if(this.categories=="Personal")
   {
     this.color="rgb(114, 168, 20)"
   }
   else if(this.categories=="Miscellaneous")
   {
     this.color="burlywood"
   }
   else{
     this.color="goldenrod"
   }
     const notes={
       id:this.id,
       title:this.title,
       body:this.body,
       modifiedDate:Date.now(),
       createdDate:this.createdDate,
       categories:this.categories,
       color:this.color
     }
     if(this.title.length>0 && this.body.length>0 && this.categories.length>0)
     {
       this.valid=false
     }
     else{
       this.valid=true
     }
     if(this.valid)
   {
     window.alert("Fill all details")
   }
   else{
   this.NotesService.editnotes(this.id,notes)
   this.Router.navigate(["/home"])
   }
   }
   onCancel()
   {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.height = '100px';
    dialogConfig.width="300px";
    this.dialog.open(CloseDialogComponent, dialogConfig)
     //this.Router.navigate(["/home"])
   }
   onAdd()
    {
      if(this.title.length>0 && this.body.length>0 && this.categories.length>0)
      {
        this.valid=false
      }
      else{
        this.valid=true
      }
    console.log(this.title+this.body+this.categories)
    if(this.categories=="Work")
    {
      this.color="cadetblue"
    }
    else if(this.categories=="Personal")
    {
      this.color="rgb(114, 168, 20)"
    }
    else if(this.categories=="Miscellaneous")
    {
      this.color="burlywood"
    }
    else{
      this.color="goldenrod"
    }
      const notes={
      id:Math.floor(Math.random() * 1000000),
      title:this.title,
      body:this.body,
      modifiedDate:Date.now(),
      createdDate:Date.now(),
      categories:this.categories,
      color:this.color
    }
    if(this.valid)
    {
      window.alert("Fill all details")
    }
    else{
    this.NotesService.addnotes(notes)
    this.Router.navigate(["/home"])
    }
    }
    back()
    {
      this.Router.navigate(["/home"])
    }
}
