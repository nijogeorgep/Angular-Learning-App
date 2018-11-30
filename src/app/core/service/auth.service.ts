import { Injectable } from '@angular/core';
import { MessageService } from '../../shared/service/message.service';
import { UserModel } from '../../shared/models/user.model';
import { CONFIG } from '../config';

@Injectable()
export class AuthService {
  public currentUser: UserModel;
  public redirectUrl: string;
  constructor(private messageService: MessageService) { }

  isLoggedIn(): boolean {
    const auth_config = JSON.parse(sessionStorage.getItem(CONFIG.KEYS.AUTH_CONFIG));
    return !!auth_config;
  }
  login(userName: string, password: string): void {
    if (!userName || !password) {
      this.messageService.addMessage('Please enter your userName and password');
      return;
    }
    this.currentUser = {
      id: 2,
      userName: userName,
      isAdmin: false
    };
    sessionStorage.setItem(CONFIG.KEYS.AUTH_CONFIG, JSON.stringify(this.currentUser));
    this.messageService.addMessage(`User: ${userName} logged in`);
  }

  logout(): void {
    sessionStorage.setItem(CONFIG.KEYS.AUTH_CONFIG, null);
  }

}
