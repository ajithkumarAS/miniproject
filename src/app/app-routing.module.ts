import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EventComponent } from './event/event.component';
import { OverviewComponent } from './overview/overview.component';
import { ServiceComponent } from './service/service.component';
import { ShortcutsComponent } from './shortcuts/shortcuts.component';
import { UserComponent } from './user/user.component';
import { UserlistComponent } from './userlist/userlist.component';

const routes: Routes = [

{path:'app-dashboard',component:DashboardComponent},
  {path:'app-about',component:AboutComponent},
  {path:'app-service',component:ServiceComponent},
  {path:'app-contact',component:ContactComponent},
  {path:'app-overview',component:OverviewComponent},
  {path:'app-shortcuts',component:ShortcutsComponent},
  {path:'app-event',component:EventComponent},
  {path:'app-user',component:UserComponent,children:[{path:'app-userlist',component:UserlistComponent}]}
  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
