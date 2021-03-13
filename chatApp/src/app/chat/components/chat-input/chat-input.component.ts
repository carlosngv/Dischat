import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { SocketService } from '../../services/socket.service';

@Component({
  selector: 'app-chat-input',
  templateUrl: './chat-input.component.html',
  styleUrls: ['./chat-input.component.scss']
})
export class ChatInputComponent implements OnInit {

  @Output() onSend: EventEmitter<string> = new EventEmitter();
  @ViewChild('messageInput') messageInput: ElementRef<any>;

  message: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  sendMessage(){
    this.message = this.messageInput.nativeElement.value;
    this.onSend.emit(this.message);
    this.messageInput.nativeElement.value = '';
  }

}
