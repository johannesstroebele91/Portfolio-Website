import {Component, OnInit} from '@angular/core';
import {UsersService} from '../../../services/users.service';
import {User} from '../../../models/user';
import {Repo} from '../../../models/repo';
import {ActivatedRoute} from '@angular/router';
import {Meta, Title} from '@angular/platform-browser';

/* STRUCTURE
  1. Variables
  2. Constructor
  3. API request methods
  4. Links methods
  5. General Methods
 */

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

    // GENERAL VARIABLES
    user: User;
    repos: Repo[];
    reposAmount = 0;

    // Most used languages per repository
    languageInRepos: string[] = [];
    languageInReposWithoutDuplicates: string[] = [];
    numberOfLanguageInReposWithoutDuplicates: number[] = [];

    // CONSTRUCTOR
    constructor(private usersService: UsersService, private route: ActivatedRoute, private title: Title, private meta: Meta) {
        this.title.setTitle('Projects page');
        this.meta.addTags([
            {
                name: 'author',
                content: 'Johannes Ströbele'
            },

            {
                name: 'description',
                content: 'I conceptualize, designed, and developed the following projects.' +
                    'They are directly fetched from the GitHub API. So everything is up to date.'
            },
            {
                name: 'keywords',
                content: 'Johannes Ströbele, portfolio, projects, GitHub projects, coding,' +
                    'full stack developer, software developer, information design, ' +
                    'front end development, back end development, enterprise application, Johannes Strobele'
            },
        ], true);
    }

    // API REQUEST METHODS
    ngOnInit(): void {
        // Update GitHub username with input from user
        this.usersService.updateUsername('johannesstroebele91');

        // Gets respective searched user data from service
        // Subscription to function necessary, because it returns an observable
        this.usersService.getUserData().subscribe(data => {
            this.user = data;
        });

        // Gets respective searched data about user's repos from service
        this.usersService.getUserReposData().subscribe(data => {
            this.repos = data;

            // For displaying number of repos
            this.reposAmount = Object.keys(this.repos).length;


            // Array for all languages in repos of one user
            let amountOfLanguageInReposWithoutNull = 0;
            for (let i = 0; i < this.reposAmount; i++) {
                if (this.repos[i].language !== null) {
                    this.languageInRepos.push(this.repos[i].language);
                    amountOfLanguageInReposWithoutNull++;
                }
            }

            // The same array without duplicates
            let languageInReposWithoutDuplicatesSet: Set<string>;
            languageInReposWithoutDuplicatesSet = new Set(this.languageInRepos);
            languageInReposWithoutDuplicatesSet.forEach(v => this.languageInReposWithoutDuplicates.push(v));

            // How often the coding language occurs in the array
            let numberOfLanguageInReposWithoutDuplicatesObj: any;
            numberOfLanguageInReposWithoutDuplicatesObj = this.countRandomStringElementDuplicatesInArray();
            this.numberOfLanguageInReposWithoutDuplicates = Object.values(numberOfLanguageInReposWithoutDuplicatesObj);

            // Getting the coding languages of each repository
            this.repos.forEach((repo) => {
                this.usersService.getUserRepoLanguagesData(repo).subscribe(languages => {
                        repo.languages = [];

                        Object.keys(languages).forEach((key) => repo.languages.push({
                                name: key,
                                frequency: languages[key]
                            })
                        );
                    }
                );
            });
        });
    }

    // LINKS METHODS
    linkToWebsite(userLink: string) {
        window.open(userLink, '_blank');
    }

    // GENERAL METHODS
    // count number of random string element duplicates in array
    countRandomStringElementDuplicatesInArray() {
        const counts: number[] = [];
        this.languageInRepos.forEach((x) => {
            counts[x] = (counts[x] || 0) + 1;
        });
        return counts;
    }
}
