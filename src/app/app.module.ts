import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { ContactComponent } from './contact/contact.component';
import { ShortcutsComponent } from './shortcuts/shortcuts.component';
import { OverviewComponent } from './overview/overview.component';
import { EventComponent } from './event/event.component';
import { UserComponent } from './user/user.component';
import { UserlistComponent } from './userlist/userlist.component';
import { ProfileComponent } from './profile/profile.component';
import { ServiceService } from './services/service.service';
import { HomeComponent } from './home/home.component';
import { HotelsComponent } from './hotels/hotels.component';
import { Dasboard1Component } from './dasboard1/dasboard1.component';
import { AddhotelComponent } from './addhotel/addhotel.component';
import { TitleFilterPipe } from './pipe/title-filter.pipe';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    AboutComponent,
    ServiceComponent,
    ContactComponent,
    ShortcutsComponent,
    OverviewComponent,
    EventComponent,
    UserComponent,
    UserlistComponent,
    ProfileComponent,
    HomeComponent,
    HotelsComponent,
    Dasboard1Component,
    AddhotelComponent,
    TitleFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,

    
  
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
