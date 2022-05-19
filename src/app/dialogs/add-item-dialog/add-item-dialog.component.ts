import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Item } from 'src/app/models/item';
import { ADD_ITEM, UPDATE_ITEM } from 'src/app/state/todolist.actions';

@Component({
  selector: 'app-add-item-dialog',
  templateUrl: './add-item-dialog.component.html',
  styleUrls: ['./add-item-dialog.component.css'],
})
export class AddItemDialogComponent implements OnInit {
  itemForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<AddItemDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Item,
    private store: Store
  ) {}

  ngOnInit(): void {
    this.itemForm = this.fb.group({
      id: [this.data?.id],
      title: [this.data?.title],
      description: [this.data?.description],
      status: [this.data?.status],
    });
  }

  submit() {
    let item = {
      id: this.itemForm.get('id')?.value != null ? this.itemForm.get('id')?.value : Math.random(),
      title: this.itemForm.get('title')?.value,
      description: this.itemForm.get('description')?.value,
      status: this.itemForm.get('status')?.value,
    };
   
    if(this.data === null){
      this.store.dispatch(ADD_ITEM({item})); 

    }else{
      this.store.dispatch(UPDATE_ITEM({item})); 
    }

    this.dialogRef.close();
  }

  close(){
    this.dialogRef.close();
  }

}
