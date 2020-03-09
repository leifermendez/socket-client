import { Component, Injectable, OnInit } from '@angular/core';
import { SocketProviderConnect } from './web-socket.service';
import { CookieService } from 'ngx-cookie-service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'socket-front-client';
  user:any;
  user_id:any;
  msg:any;
  input_message:any;
  show_message:any;
  messages=[];

  constructor(protected socketService: SocketProviderConnect,

    private cookieService: CookieService) {
    socketService.outEven.subscribe(res => {
        this.messages.push(res.msg)
    })

   }

  ngOnInit() {
    try{
      this.show_message = JSON.parse(this.cookieService.get('user'));
    }catch(e){
      this.show_message = null
    }
 
  }

   mockedUser = () => {
    this.cookieService.set('user',JSON.stringify({
      user:this.user ,
      id:this.user_id
    }))

    window.location.reload();
   }

   sendData = (event) =>{
    this.socketService.emitEvent(event,
      {
        message: this.input_message
      })
      this.input_message = null;
   }
}
