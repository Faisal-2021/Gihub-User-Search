import { Component, Input, OnInit } from '@angular/core';
import { GithubApiService } from 'src/app/services/github-api.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-github-repos',
  templateUrl: './github-repos.component.html',
  styleUrls: ['./github-repos.component.css']
})
export class GithubReposComponent implements OnInit {
  
  @Input() githubRepos:any;

 allRepo : any [] =[];
 page=1;
 totalRepos:number=0;
 lang:any[]=[];

  constructor(private githubApi:GithubApiService, private spinner:NgxSpinnerService) { }
  ngOnInit(): void {
  
  }
  ngOnChanges(): void {
    this.allRepo=[];
    this.lang=[];
    this.page=1;
    this.repoTcount();
    this.getRepos();

}

  repoTcount(){
    this.totalRepos=this.githubRepos.public_repos;
 }

 getRepos(){
   this.spinner.show()
  this.githubApi.getReposIn(this.githubRepos.login,10,this.page+0)
  .subscribe((results:any)=>{
    results.forEach((repo:any ,index:number) => {
      this.allRepo.push(repo)
      this.githubApi.getRepoLanguage(repo.languages_url).subscribe((languages:any)=>{
        let Ln = Object.keys(languages) //convert object into array for easy loop through ngFor
        this.allRepo[index].language=Ln 
      })
      this.spinner.hide()
    });
  })
 }
}
