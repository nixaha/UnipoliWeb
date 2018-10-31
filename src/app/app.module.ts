import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule, MatProgressBarModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './componentes/home-page/home-page.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { RegisterPageComponent } from './componentes/register-page/register-page.component';
import { LoginPageComponent } from './componentes/login-page/login-page.component';
import { PrivadoPageComponent } from './componentes/privado-page/privado-page.component';
import { NotFoundPageComponent } from './componentes/not-found-page/not-found-page.component';
import { MensajesPageComponent } from './componentes/mensajes-page/mensajes-page.component';

import {FlashMessagesModule} from 'angular2-flash-messages';
import {FlashMessagesService} from 'angular2-flash-messages';

import {AngularFireModule} from 'angularfire2';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {AngularFireStorageModule} from '@angular/fire/storage';
import { FirestoreService } from './firestore.service';
import { AngularFirestore } from 'angularfire2/firestore';

import {environment} from '../environments/environment';

import { AuthService } from './servicios/auth.service';
import {AuthGuard } from './guards/auth.guard';




@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    RegisterPageComponent,
    LoginPageComponent,
    PrivadoPageComponent,
    NotFoundPageComponent,
    MensajesPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireAuthModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    FlashMessagesModule,
    HttpClientModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    AngularFireStorageModule,
  ],
  providers: [AuthService, AuthGuard, FlashMessagesService, FirestoreService, AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
