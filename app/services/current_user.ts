import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';


@Injectable()
export class CurrentUserService {
    private _user: Object;

    constructor(private _http: Http) {}

    getCurrentUser() {
        if (!this._user) {
            this._user = JSON.parse(localStorage.getItem('user'));
        }
        return this._user;
    }
    setCurrentUser(user: Object) {
        this._user = user;
        localStorage.setItem('user', JSON.stringify(this._user));
    }

    signIn(username: string, password: string, onSuccess, onError) {
        var url = 'https://intranet.kaleidos.net/api/v1/auth/login/';

        var body = JSON.stringify({
            username: username,
            password: password
        });

        this._http.post(url, body).subscribe(
            res => {
                this.setCurrentUser(res.json());
                onSuccess();
            },
            err => {
                onError(err.json());
            }
        );
    }
}
