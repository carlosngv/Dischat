import { Component, Input, OnInit } from '@angular/core';
import { Message } from '../interfaces/message.interface';

@Component({
  selector: 'app-chat-display',
  templateUrl: './chat-display.component.html',
  styleUrls: ['./chat-display.component.scss']
})
export class ChatDisplayComponent implements OnInit {
  @Input() messages: Message[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
