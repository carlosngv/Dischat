import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';
import { Message } from '../components/interfaces/message.interface';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  messages: Message[] = []
  socket: any;
  users: any[] = [];

  constructor() {
    this.setUpSocket();
    this.onReveiveMessage(); // Empieza a escuchar cuando se inicializa el servicio
  }

  setUpSocket() {
    this.socket = io('https://dischat-ng.herokuapp.com/');
  }


  sendMessage(message: string) {
    let user = localStorage.getItem('name');
    if(!user) return
    this.socket.emit('new-message', {message, user}); // Toma el mensaje y lo formatea
  }

  onReveiveMessage() {
    this.socket.on('users-list', (e: any) => {
      this.users.push(...e);
      console.log('E', e);
    });
    this.socket.on('welcome-message', (e:any) => {
        console.log(e);
        this.messages.push(e);
    });
    this.socket.on('message', (e: any)=>{
      if(e){
        console.log(e);
        this.messages.push(e); // Toma el mensaje formateado y lo mete al arreglo de mensajes
      }
    });

  }


  joinChat() {
    let user = localStorage.getItem('name');
    if(!user) return
    this.socket.emit('join-chat', {user});
  }


}
