import { createAction, props } from "@ngrx/store";
import { Item } from "../models/item";

export const ADD_ITEM = createAction('[Todolist] ADD ITEM', props<{item: Item}>()); 
export const DELETE_ITEM = createAction('[TodoList] Delete Item', props<{id: number}>())
export const UPDATE_ITEM = createAction('[TodoList] Update Item', props<{item: Item}>())