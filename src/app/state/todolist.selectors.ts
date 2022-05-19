import { createFeatureSelector } from "@ngrx/store";
import { Item } from "../models/item";

export const todoListSelector = createFeatureSelector<Array<Item>>('todolist'); 