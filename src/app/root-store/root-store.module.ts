import { TasksEffects } from './tasks/tasks.effects';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from './../../environments/environment';

import { tasksReducer } from './tasks/tasks.reducer';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forRoot({ tasks: tasksReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    EffectsModule.forRoot([TasksEffects]),
  ],
  exports: [],
  declarations: [],
  providers: []
})
export class RootStoreModule {

}
