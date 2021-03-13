import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatInputComponent } from './components/chat-input/chat-input.component';
import { ChatDisplayComponent } from './components/chat-display/chat-display.component';
import { MainComponent } from './components/main/main.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { ChatRoutingModule } from './chat-routing.module';
import { HomeComponent } from './pages/home/home.component';



@NgModule({
  declarations: [ChatInputComponent, ChatDisplayComponent, MainComponent, UserListComponent, HomeComponent],
  imports: [
    CommonModule,
    ChatRoutingModule,
  ],
})
export class ChatModule { }
