import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, throwError} from "rxjs";
import {AuthenticationResponse} from "../shared/models";

@Injectable({
    providedIn: 'root'
})
export class AuthenticationClient {
    private handleError(error: any) {
        console.error('An error occurred:', error);
        return throwError(error);
    }

    constructor(private http: HttpClient) {
    }

    public login(email: string, password: string) {
        return this.http.post<AuthenticationResponse>("http://localhost:8080/api/v1/auth/authenticate",
            {
                email: email,
                password: password
            })
            .pipe(catchError(this.handleError));
    }

    public register(email: string, password: string) {
        return this.http.post<AuthenticationResponse>("http://localhost:8080/api/v1/auth/register",
            {
                email: email,
                password: password
            })
            .pipe(catchError(this.handleError));
    }
}
