import {provide} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS, APP_BASE_HREF, LocationStrategy, PathLocationStrategy} from 'angular2/router';
import {HTTP_PROVIDERS, Headers, BaseRequestOptions, RequestOptions} from 'angular2/http';

import {AppCmp} from './components/app/app';

import {CurrentUserService} from './services/current_user';


var headers = new Headers();
headers.append('Content-Type', 'application/json');

class CustomRequestOptions extends BaseRequestOptions {
    headers: Headers = headers;
}


bootstrap(
    AppCmp,
    [
        provide(APP_BASE_HREF, { useValue: '<%= APP_ROOT %>' } ),
        provide(LocationStrategy, { useClass: PathLocationStrategy }),
        ROUTER_PROVIDERS,
        HTTP_PROVIDERS,
        provide(RequestOptions, {useClass: CustomRequestOptions}),
        CurrentUserService
    ]
);
