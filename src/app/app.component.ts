import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AddItemDialogComponent } from './dialogs/add-item-dialog/add-item-dialog.component';
import { Item } from './models/item';
import { DELETE_ITEM } from './state/todolist.actions';
import { todoListSelector } from './state/todolist.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent { 

  items$!: Observable<Array<Item>>; 
  
  constructor(private dialog: MatDialog,
              private store:Store){}

  ngOnInit(){
    this.items$ = this.store.select(todoListSelector);
  }

  openDialog(){
    const dialogRef = this.dialog.open(AddItemDialogComponent, {
      width: '450px',
    });
  }

  openUpdateDialog(item: Item){
    const dialogRef = this.dialog.open(AddItemDialogComponent, {
      width: '450px',
      data: item
    });
  }

  deleteItem(item: Item){
    let id = item.id; 
    if(id){
      this.store.dispatch(DELETE_ITEM({id}))
    }
  }
}
