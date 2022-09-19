import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from "@angular/flex-layout";

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatMenuModule } from '@angular/material/menu';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from 'src/environments/environment';
import { HomepageComponent } from './core/homepage/homepage.component';
import { MenuItemComponent } from './core/menu-item/menu-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    MenuItemComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    BrowserAnimationsModule,

    FlexLayoutModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatMenuModule,

    AngularFireModule.initializeApp(environment.firebaseConfig),
    // AngularFireAuthModule,
    AngularFirestoreModule,
    // AngularFireStorageModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
