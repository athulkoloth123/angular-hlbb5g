import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {RouterModule} from "@angular/router";
import { ReactiveFormsModule } from '@angular/forms';
import { Exercise1Module } from './exercises/exercise1/exercise1.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    Exercise1Module,
    // RouterModule.forRoot([{
    //   path: 'exercises',
    //   loadChildren: () =>   import('./exercises/exercises.module').then((m) => m.ExercisesModule),
    // }]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
