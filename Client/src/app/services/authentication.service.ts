﻿import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { User } from '../models';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {

    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    login(username: string, password: string): Observable<any> {
        var user = {
            username: username,
            password: password
        }
        const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
        return this.http.post<any>(`${environment.apiUrl}/account/authenticate`, user, httpOptions)
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    this.currentUserSubject.next(user);
                }

                return user;
            }));

    }

    getUserLogged() {
        
        return this.http.get<any>(`${environment.apiUrl}/account/getUserLogged`).subscribe(
            user => {
                localStorage.setItem('currentUser', JSON.stringify(user));
                    this.currentUserSubject.next(user);
            }
        )
           
    }
    logout() {

        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
    }
}