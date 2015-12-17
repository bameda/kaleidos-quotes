import {Component, ViewEncapsulation} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
//import {HTTP_PROVIDERS} from 'angular2/http';

import {CurrentUserService} from '../../services/current_user';
import {HomeCmp} from '../home/home';
import {LoginCmp} from '../login/login';


@Component({
    selector: 'app',
    viewProviders: [CurrentUserService],
    templateUrl: './components/app/app.html',
    styleUrls: ['./components/app/app.css'],
    encapsulation: ViewEncapsulation.None,
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    { path: '/', component: HomeCmp, as: 'Home' },
    { path: '/login', component: LoginCmp, as: 'Login' }
])
export class AppCmp {
    constructor(
        private _router: Router,
        private _currentUserSrv: CurrentUserService
    ) { }

    ngOnInit() {
        if(!this._currentUserSrv.getCurrentUser()) {
            this._router.navigate( ['Login', { }] );
        }
    }
}
