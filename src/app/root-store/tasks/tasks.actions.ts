import { Action } from '@ngrx/store';

import { Task } from './tasks.reducer';

export enum ActionTypes {
  ADD_TASK = '[New Task] Add new task',
  ADD_TASK_SUCCESS = '[New Task] Add new task successful',
  ADD_TASK_FAILURE = '[New Task] Add new task failure',
}

export class AddTask implements Action {
  readonly type = ActionTypes.ADD_TASK;

  constructor(public payload: { task: Task }) { }
}

export class AddTaskSuccess implements Action {
  readonly type = ActionTypes.ADD_TASK_SUCCESS;

  constructor(public payload: { task: Task }) { }
}

export class AddTaskFailure implements Action {
  readonly type = ActionTypes.ADD_TASK_FAILURE;
  constructor(public payload: { error: string }) { }
}


export type ActionTypesUnion = AddTask | AddTaskSuccess | AddTaskFailure;
