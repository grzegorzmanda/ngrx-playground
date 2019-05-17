import { Injectable } from '@angular/core';
import { mergeMap, map, catchError, tap } from 'rxjs/operators';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { SnackbarService } from 'ngx-snackbar';

import { TasksService } from './../../services/tasks.service';
import { ActionTypes, AddTask, AddTaskSuccess, AddTaskFailure } from './tasks.actions';

@Injectable()
export class TasksEffects {

  constructor(
    private actions$: Actions,
    private ts: TasksService,
    private snackbar: SnackbarService
  ) { }

  @Effect()
  newTask$ = this.actions$.pipe(
    ofType<AddTask>(ActionTypes.ADD_TASK),
    mergeMap(action => this.ts.addTask(action.payload.task).pipe(
      map(task => new AddTaskSuccess({ task })),
      catchError(err => of(new AddTaskFailure(err.message)))
    ))
  );

  @Effect({ dispatch: false })
  errorHandler$ = this.actions$.pipe(
    ofType<AddTaskFailure>(ActionTypes.ADD_TASK_FAILURE),
    map(action => action.payload),
    tap(console.error),
    tap(err => {
      this.snackbar.add({
        msg: `<strong>${err}</strong>`,
        timeout: 5000,
        action: {
          text: 'OK',
          onClick: (snack) => {
            this.snackbar.clear();
          },
        }
      });
    })
  );

}
