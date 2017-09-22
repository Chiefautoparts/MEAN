import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { HomeComponent } from './home/home.component';
import { NotesPrivateComponent } from './notes-private/notes-private.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UsernameDetailsComponent } from './username-details/username-details.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { TaskComponent } from './task/task.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    HomeComponent,
    NotesPrivateComponent,
    TaskDetailsComponent,
    UserDetailsComponent,
    UsernameDetailsComponent,
    ProductDetailsComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
