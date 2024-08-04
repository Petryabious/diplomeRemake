import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthorizationService {
  public isAuth = signal(false);

  constructor() {}
}
