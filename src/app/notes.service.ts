import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
notes:Array<object>=[];
notes1:Array<object>=[];
getnotes(){
  this.notes=JSON.parse(localStorage.getItem("notes") || "[]");
  this.notes1=JSON.parse(localStorage.getItem("notes") || "[]");
  this.notes1.sort((left, right): number => {
    if (left["modifiedDate"] > right["modifiedDate"]) return -1;
    if (left["modifiedDate"] < right["modifiedDate"]) return 1;
    return 0;
  });
  console.log(this.notes1,"notes1")
  return this.notes1;
}
addnotes(note)
{
 this.notes=JSON.parse(localStorage.getItem("notes") || "[]");
 this.notes.push(note)
 console.log(this.notes)
 localStorage.setItem('notes',JSON.stringify(this.notes))
}
editnotes(id,newNote){
  console.log("hello")
  this.notes=JSON.parse(localStorage.getItem("notes") || "[]");
  for (var i=0;i<this.notes.length;i++)
  {
    if(this.notes[i]["id"]==id)
    {
      var id1=i;
      break
    }
  }
  console.log(id1)
  this.notes[id1]=newNote
  localStorage.setItem('notes',JSON.stringify(this.notes))
}
deletenotes(id){
  this.notes=JSON.parse(localStorage.getItem("notes") || "[]");
  for (var i=0;i<this.notes.length;i++)
  {
    if(this.notes[i]["id"]==id)
    {
      var id1=i;
      break
    }
  }
  this.notes.splice(id1,1);
  localStorage.setItem('notes',JSON.stringify(this.notes))
  console.log(this.notes+"after delete");
}
}
