import {Injectable} from 'angular2/core';
import {Http, Headers} from 'angular2/http';


@Injectable()
export class CurrentUserService {
    private _user: Object;

    constructor(private _http: Http) {}

    getCurrentUser() {
        if (!this._user) {
            this._user = localStorage.getItem('user');
        }
        return this._user;
    }

    signIn(username: string, password: string) {
        var url = 'https://intranet.kaleidos.net/api/v1/auth/login/';
        var headers = new Headers([('Content-Type', 'application/json')]);
        var body = JSON.stringify({
            'username': username,
            'password': password
        });

        this._http.post(url, body, headers=headers);
    }
}
