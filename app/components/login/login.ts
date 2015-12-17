import {Component, ViewEncapsulation} from 'angular2/core';
import {Router} from 'angular2/router';

import {CurrentUserService} from '../../services/current_user';


export class LoginModel {
    public username: string;
	public password: string;
}


@Component({
    selector: 'login.login',
    templateUrl: './components/login/login.html',
    styleUrls: ['./components/login/login.css'],
    encapsulation: ViewEncapsulation.None,
    viewProviders: [CurrentUserService]
})
export class LoginCmp {
	model = new LoginModel();
	errorOnSubmitions = false;

    constructor(
        private _router: Router,
        private _currentUserSrv: CurrentUserService
    ) { }

	onSubmit() {
        var onSuccess = () => this._router.navigate( ['quotes', { }] );
        var onError = (err) => this.errorOnSubmitions = err.detail;

        this._currentUserSrv.signIn(this.model.username,
                                    this.model.password,
                                    onSuccess,
                                    onError);
	}
}
