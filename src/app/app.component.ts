import { Component } from '@angular/core';
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {NotesService} from './notes.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'notepad';
  notes;
  constructor(private dialog: MatDialog,private noteService:NotesService,private Router:Router) {
    this.notes = this.noteService.getnotes()
  console.log("from localstorage")
  }
}
