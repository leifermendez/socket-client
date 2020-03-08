import { Component, Injectable } from '@angular/core';
import { SocketProviderConnect } from './web-socket.service';
import { CookieService } from 'ngx-cookie-service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'socket-front-client';
  user:any;
  user_id:any;
  broad:any;
  msg:any;
  input_message:any;

  constructor(protected socketService: SocketProviderConnect,
    private cookieService: CookieService) {
    socketService.outEven.subscribe(res => {
        this.msg = res.msg;
    })
   }

   mockedUser = () => {
    this.cookieService.set('user',JSON.stringify({
      user:this.user ,
      id:this.user_id
    }))

    window.location.reload();
   }

   sendData = (event) => this.socketService.emitEvent(event,
    {
      message: this.input_message
    })
}
