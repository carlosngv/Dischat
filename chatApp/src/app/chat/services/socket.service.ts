import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';
import { Message } from '../components/interfaces/message.interface';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  messages: Message[] = []
  socket: any;

  constructor() {
    this.setUpSocket();
    this.onReveiveMessage(); // Empieza a escuchar cuando se inicializa el servicio
  }

  setUpSocket() {
    this.socket = io('http://localhost:3000/');
  }


  sendMessage(message: string) {
    this.socket.emit('new-message', message); // Toma el mensaje y lo formatea
  }

  onReveiveMessage() {
    this.socket.on('message', (e: any)=>{
      this.messages.push(e); // Toma el mensaje formateado y lo mete al arreglo de mensajes
  });
  }


}
