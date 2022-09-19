import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { EventsRoutingModule } from './events-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { environment } from 'src/environments/environment';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    EventsRoutingModule,

    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
  ]
})
export class EventsModule { }
