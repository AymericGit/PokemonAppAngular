import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot }
    from '@angular/router';
import { AuthentificationService } from './auth.service';
 
@Injectable()
export class AuthState implements CanActivate {
 
    constructor(private authentificationService: AuthentificationService, private router: Router) { }
 
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        let url: string = state.url;
        return this.ifLogin(url);
    }
 
    ifLogin(url: string): boolean {
        if (this.authentificationService.connected) { return true; }
        this.authentificationService.redirectTo = url;
        this.router.navigate(['/']);
 
        return false;
    }
}