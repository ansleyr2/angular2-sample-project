import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Word } from '../entity/Word';
/*import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';*/

@Injectable()
export class AppService {

    constructor(private http: Http) { }
    // Fetch words
    public getWords(): Observable<Word[]> {
        let headers = new Headers();
        return this.http
            .get('http://localhost:8080/api/words')
            .map(response => {
                const words = response.json();
                console.log(words);
                return words;

            })
            .catch(this.handleError);
    }
    public saveWord(data: any): Observable<any>{
        let wordDetails = {
            "word": data.word,
            "meaning": data.meaning,
            "sentence": data.sentence
        };
        return this.http.post('http://localhost:8080/api/words/saveword',wordDetails).catch(this.handleError);
    }
    private handleError(error: Response | any) {
        console.error('ApiService::handleError', error);
        return Observable.throw(error);
    }
}