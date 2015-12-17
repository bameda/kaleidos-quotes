import {Component, ViewEncapsulation} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {QuotesCmp} from '../quotes/quotes';
import {LoginCmp} from '../login/login';

import {CurrentUserService} from '../../services/current_user';


@Component({
    selector: 'app',
    templateUrl: './components/app/app.html',
    styleUrls: ['./components/app/app.css'],
    encapsulation: ViewEncapsulation.None,
    directives: [ROUTER_DIRECTIVES],
    viewProviders: [CurrentUserService]
})
@RouteConfig([
    { path: '/login', component: LoginCmp, as: 'Login' },
    { path: '/quotes', component: QuotesCmp, as: 'Quotes' }
])
export class AppCmp {
    constructor(
        private _router: Router,
        private _currentUserSrv: CurrentUserService
    ) { }

    ngOnInit() {
        if(!this._currentUserSrv.getCurrentUser()) {
            this._router.navigate( ['Login', { }] );
        } else {
            this._router.navigate( ['Quotes', { }] );
        }
    }
}
