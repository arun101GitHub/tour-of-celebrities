import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CelebritiesComponent } from './celebrities/celebrities.component';
import { CelebrityDetailComponent } from './celebrity-detail/celebrity-detail.component';
//import { MessageService } from './message.service';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
//import { MockCelebritiesComponent } from './mock-celebrities1/mock-celebrities.component';

@NgModule({
  declarations: [
    AppComponent,
    CelebritiesComponent,
    CelebrityDetailComponent,
    MessagesComponent,
    DashboardComponent
    
   ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
