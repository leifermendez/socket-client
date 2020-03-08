import { BrowserModule } from '@angular/platform-browser';
import { NgModule ,Injectable } from '@angular/core';
import { Socket,  SocketIoModule } from 'ngx-socket-io';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'; 
import { SocketProviderConnect } from './web-socket.service';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SocketIoModule
  ],
  providers: [SocketProviderConnect, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
