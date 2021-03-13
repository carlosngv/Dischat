import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SocketService } from '../../services/socket.service';
import { Message } from '../interfaces/message.interface';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  messages: Message[] = [];

  constructor(private socketService: SocketService) {
    this.messages = this.socketService.messages;
  }

  ngOnInit(): void {
    this.socketService.setUpSocket();
  }

  sendMessage(message: string) {
    this.socketService.sendMessage(message);
  }



}
