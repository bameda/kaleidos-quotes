import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';


@Injectable()
export class QuotesService {
    private _quotes: Array<Object> = [];

    constructor(private _http: Http) {}

    getQuotes() {
        var url = 'https://intranet.kaleidos.net/api/v1/quotes/';

        this._http.get(url).subscribe(
            res => {
                console.log(res);
                this._quotes = this._quotes.concat(res.json());
            },
            err => {
                console.log(err);
            }
        );
    }
}
