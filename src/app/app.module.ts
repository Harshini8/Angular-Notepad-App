import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { NotesComponent } from './notes/notes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field'
import {FormsModule} from '@angular/forms'
import { NotesService} from './notes.service';
//import { EditNoteComponent } from './edit-note/edit-note.component';
import { MatGridListModule} from '@angular/material/grid-list';
import { ChangeNotesComponent } from './change-notes/change-notes.component';
import { NotesListComponent } from './notes-list/notes-list.component';
import { FullNoteComponent } from './full-note/full-note.component';
import { CloseDialogComponent } from './close-dialog/close-dialog.component';
@NgModule({
  declarations: [
    AppComponent,
    ChangeNotesComponent,
    NotesListComponent,
    FullNoteComponent,
    CloseDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatGridListModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule
  ],
  providers: [NotesService],
  bootstrap: [AppComponent],
  entryComponents: [NotesListComponent]
})
export class AppModule { }
