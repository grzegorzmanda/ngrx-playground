import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { of, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ngrx-demo';
  myForm: FormGroup;

  items$: Observable<{ task: string }[]>;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      task: ['']
    });
  }

  ngOnInit() { }

  addTask() {
    // dispatch action here
    console.log(`[addTask]`);
  }

}
