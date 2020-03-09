import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms'; 

/**
 * Importamos los paquetes a utilizar, en nuestro caso "ngx-socket-io" para conectar con nuestro server socket.io
 * y tambien importamos "ngx-cookie-service" ya que manejaremos data en la cookies, 
 * por ultimo importamos el Servicio que creamos llamado "web-socket.service"
 */

import { SocketIoModule } from 'ngx-socket-io';
import { CookieService } from 'ngx-cookie-service';
import { SocketProviderConnect } from './web-socket.service';

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
