import { AfterViewChecked } from '@angular/core';
import { AfterViewInit, Component, ElementRef, Input, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Message } from '../interfaces/message.interface';

@Component({
  selector: 'app-chat-display',
  templateUrl: './chat-display.component.html',
  styleUrls: ['./chat-display.component.scss']
})
export class ChatDisplayComponent implements AfterViewChecked {


  @ViewChildren("messagesContainer") messagesContainers: QueryList<ElementRef>;

  @Input() messages: Message[] = [];


  constructor() {
  }


  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  scrollToBottom() {
    this.messagesContainers.first.nativeElement.scrollTop = this.messagesContainers.first.nativeElement.scrollHeight;
  }


}
