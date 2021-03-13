import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SocketService } from '../../services/socket.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('inputRef') inputRef: ElementRef;

  constructor(private router: Router,
    private socketService: SocketService) { }

  ngOnInit(): void {
  }

  getName() {
    let name = this.inputRef.nativeElement.value;
    if(name.length === 0) { this.router.navigate(['/'])}
    localStorage.setItem('name', name);
    this.socketService.joinChat();
  }



}
