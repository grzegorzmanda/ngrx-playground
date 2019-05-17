import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';

import { Task } from './../root-store/tasks/tasks.reducer';
import { delay, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private _tasks: Task[] = [];
  private _tasks$ = new BehaviorSubject(this._tasks);

  get tasks$() {
    return this._tasks$.asObservable();
  }

  addTask(task: Task) {
    return of(task).pipe(
      delay(2000),
      map(t => {
        if (Math.random() > 0.5) {
          const newTask = { ...t, createdAt: new Date() };
          this._tasks.push(newTask);
          this._tasks$.next(this._tasks);
          console.log(`[TasksService] BACKEND`, this._tasks);
          return newTask;
        } else {
          throw new Error('bad luck motherf****');
        }
      })
    );
  }

}
