import { Component, OnInit } from '@angular/core';
import { SocketService } from '../../services/socket.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users: any[] = [];

  constructor(
    private socketService: SocketService
  ) {
    this.users = this.socketService.users;
   }

  ngOnInit(): void {
  }

}
