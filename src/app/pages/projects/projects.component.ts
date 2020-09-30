import {Component, OnInit} from '@angular/core';
import {UsersService} from '../../../services/users.service';
import {User} from '../../../models/user';
import {ChartType, ChartOptions} from 'chart.js';
import {Label} from 'ng2-charts';
import {Repo} from '../../../models/repo';

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

    // CHARTS VARIABLES

    // Most used languages per repository
    languageInRepos: string[] = [];
    languageInReposWithoutDuplicates: string[] = [];
    numberOfLanguageInReposWithoutDuplicates: number[] = [];
    pieChartLabelsLanguagesOfRepos: Label[] = this.languageInReposWithoutDuplicates;
    pieChartDataNumberOfLanguages: number[] = this.numberOfLanguageInReposWithoutDuplicates;

    // Most stared repositories
    starsNameOfRepos: string[] = [];
    starsOfRepos: number[] = [];
    pieChartLabelsStarsNamesOfRepos: Label[] = this.starsNameOfRepos;
    pieChartDataStarsOfRepos: number[] = this.starsOfRepos;

    // Largest repositories
    sizeNameOfRepos: string[] = [];
    sizeOfRepos: number[] = [];
    pieChartLabelsSizeNamesOfRepos: Label[] = this.sizeNameOfRepos;
    pieChartDataSizeOfRepos: number[] = this.sizeOfRepos;

    // Most forked repositories
    forkNameOfRepos: string[] = [];
    forkOfRepos: number[] = [];
    pieChartLabelsForksNamesOfRepos: Label[] = this.forkNameOfRepos;
    pieChartDataForksOfRepos: number[] = this.forkOfRepos;

    // Options for all charts
    pieChartOptions: ChartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
            position: 'top',
            labels: {
                fontColor: 'white', // legend color (can be hexadecimal too)
            },
        }
    };
    // 8 repositories

    pieChartType: ChartType = 'doughnut';
    pieChartLegend = true;
    pieChartColors = [{
        backgroundColor: ['#1abc9c', '#9b59b6', '#3498db', '#C4E538', '#eb4d4b',
            '#686de0', '#7ed6df', '#f9ca24', '#a29bfe', '#00b894',
            '#1abc9c', '#9b59b6', '#3498db', '#C4E538', '#eb4d4b',
            '#686de0', '#7ed6df', '#f9ca24', '#a29bfe', '#00b894',
            '#1abc9c', '#9b59b6', '#3498db', '#C4E538', '#eb4d4b',
            '#686de0', '#7ed6df', '#f9ca24', '#a29bfe', '#00b894']
    },
    ];

    // CONSTRUCTOR
    constructor(private usersService: UsersService) {
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
            console.log(this.repos);

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

            // Needed for updating the pie chart
            this.pieChartDataNumberOfLanguages = this.numberOfLanguageInReposWithoutDuplicates;

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

    linkToEmail(emailLink: string) {
        window.open('mailto: ' + emailLink, '_blank');
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
