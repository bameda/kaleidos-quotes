import {provide} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {ROUTER_PROVIDERS, APP_BASE_HREF, LocationStrategy, PathLocationStrategy} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';

import {AppCmp} from './components/app/app';

import {CurrentUserService} from './services/current_user';


bootstrap(
    AppCmp,
    [
        provide(APP_BASE_HREF, { useValue: '<%= APP_ROOT %>' } ),
        provide(LocationStrategy, { useClass: PathLocationStrategy }),
        ROUTER_PROVIDERS,
        HTTP_PROVIDERS,
        CurrentUserService
    ]
);
