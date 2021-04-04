import { Component, OnInit } from '@angular/core';
import {NotesService} from '../notes.service'
import {Router} from '@angular/router';
import { MatDialog,MatDialogConfig } from '@angular/material/dialog';
import { FullNoteComponent } from '../full-note/full-note.component';
@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.css']
})
export class NotesListComponent{
  notes
  constructor(private dialog: MatDialog,private noteService:NotesService,private Router:Router) {
    this.notes = this.noteService.getnotes()
  console.log("from localstorage")
   }
   onDelete(id)
   {
     console.log(id);
     this.noteService.deletenotes(id)
      this.notes=this.noteService.getnotes();
   }
   openEdit(id)
   {
    console.log(id)
   // var ednote=this.notes[id]
    //console.log(ednote)
    console.log("edit")
    this.Router.navigate(["/edit/"+id]);
   }
   openAdd()
   {
     console.log("Add")
     this.Router.navigate(["/add"]);
   }
   fullCard(id)
   {
    var ednote=this.notes[id]
   // console.log(ednote,"note")
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.height = '500px';
    dialogConfig.width="500px";
    dialogConfig.data=ednote;
    this.dialog.open(FullNoteComponent, dialogConfig)
     console.log("card Clicked")
   }
}
