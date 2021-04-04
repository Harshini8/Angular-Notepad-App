import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ChangeNotesComponent } from '../app/change-notes/change-notes.component'; 
import {NotesListComponent} from '../app/notes-list/notes-list.component'
const routes: Routes = [
  { path:'home' , component:NotesListComponent},
  { path:'' , redirectTo:'/home', pathMatch:'full'},
  {path:"edit/:id",component:ChangeNotesComponent},
  {path:"add",component:ChangeNotesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
