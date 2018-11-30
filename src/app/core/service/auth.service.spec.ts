import { AuthService } from './auth.service';
import { MessageService } from '../../shared/service/message.service';
import { CONFIG } from '../config';

describe('Service: Auth', () => {
    let authService: AuthService;
    beforeEach(() => {
        authService = new AuthService(new MessageService());
    });

    it('Tests Auth Service Instatiation', () => {
        expect(authService).toBeTruthy();
    });

    it('Tests isLoggedIn function', () => {
        sessionStorage.setItem(CONFIG.KEYS.AUTH_CONFIG,
            JSON.stringify({ 'id': 2, 'userName': 'sss', 'isAdmin': false }));
        expect(authService.isLoggedIn()).toBeTruthy();
    });

    it('Tests Falsy login function', () => {
        expect(authService.login('', 'abc')).toBeUndefined();
    });

    it('Tests Truthy login function', () => {
        authService.login('abc@abc.com', 'abc');
        expect(authService.currentUser['id']).toBe(2);
    });

    it('Tests Logout function', () => {
        authService.logout();
        expect(JSON.parse(sessionStorage.getItem(CONFIG.KEYS.AUTH_CONFIG))).toBeNull();
    });
});
