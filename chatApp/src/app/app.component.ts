import { Component, OnInit } from '@angular/core';
import { SocketService } from './chat/services/socket.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(
  ){

  }

  ngOnInit() {
  }

}
