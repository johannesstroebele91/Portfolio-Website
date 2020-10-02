import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UsersService {

    // API keys
    clientId = 'a3b037c468909cdc00c5'; // needs to be set manually for running the application locally
    clientSecret = '40b1f3890764ef7553d2c87ae3a284231d0ab6a8'; // needs to be set manually for running the application locally
    apiEndpoint = 'https://api.github.com';
    username = 'johannesstroebele91';

    constructor(private http: HttpClient) {
    }

    updateUsername(username: string) {
        this.username = username;
    }

    // Gets data from GitHub API of the respective user
    getUserData(): Observable<any> {
        return this.http.get(this.apiEndpoint
            + '/users/'
            + this.username
            + '?client_id={'
            + this.clientId
            + '}?client_secret='
            + this.clientSecret);
    }

    // GET /users/:username/repos
    getUserReposData(): Observable<any> {
        return this.http.get(this.apiEndpoint
            + '/users/'
            + this.username
            + '/repos?per_page=100'
            + '&client_id='
            + this.clientId
            + '&client_secret='
            + this.clientSecret);
    }

    // GET /repos/:owner/:repo/languages
    // E. g. https://api.github.com/repos/johannesstroebele91/Angular_KnowledgeBase/languages
    getUserRepoLanguagesData(repo: any): Observable<any> {
        return this.http.get(this.apiEndpoint
            + '/repos/'
            + repo.owner.login
            + '/'
            + repo.name
            + '/languages'
        )
            ;
    }
}
