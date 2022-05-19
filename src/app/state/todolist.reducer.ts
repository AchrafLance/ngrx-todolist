import { createReducer, on } from "@ngrx/store";
import { Item } from "../models/item";
import { ADD_ITEM, DELETE_ITEM, UPDATE_ITEM } from "./todolist.actions";

export const initState:Array<Item> = []; 

export const todoListReducer = createReducer(initState,
    on(ADD_ITEM, (state, {item}) => [...state, item]),
    on(DELETE_ITEM, (state, {id}) => state.filter(item => item.id !== id)),
    on(UPDATE_ITEM, (state, {item}) => {   
        return state.map(data => data.id === item.id ? {...data, ...item} : data);     })
    )
