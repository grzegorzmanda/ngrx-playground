import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { of, Observable } from 'rxjs';

import { AddTask } from './root-store/tasks/tasks.actions';
import { TasksState } from './root-store/tasks/tasks.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ngrx-demo';
  myForm: FormGroup;

  items$: Observable<{ task: string }[]>;

  constructor(private fb: FormBuilder, private store: Store<TasksState>) {
    this.myForm = this.fb.group({
      task: ['']
    });
    this.items$ = this.store.pipe(select('tasks'));
  }

  ngOnInit() { }

  addTask() {
    const { task } = this.myForm.value;
    this.store.dispatch(new AddTask({ task: { task } }));
    this.myForm.reset();
  }

}
