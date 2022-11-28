import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TodosComponent } from './cocomponents/todos/todos.component';
import { TodoFormComponent } from './cocomponents/todo-form/todo-form.component';
import { HeadComponent } from './layout/head/head.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    TodoFormComponent,
    HeadComponent
  ],
  imports: [

    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
