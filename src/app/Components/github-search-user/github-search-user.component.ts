import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { GithubApiService } from 'src/app/services/github-api.service';

@Component({
  selector: 'app-github-search-user',
  templateUrl: './github-search-user.component.html',
  styleUrls: ['./github-search-user.component.css']
})
export class GithubSearchUserComponent implements OnInit {

  public githubUserQuery:string='';
  public githubProfile:any;
  public githubRepos:any[]=[];

  constructor(private userSearch:GithubApiService,private spinner:NgxSpinnerService) { }

  ngOnInit(): void {
  }

  public searchUser(){
    this.spinner.show();
    this.userSearch.getGithubUser(this.githubUserQuery).subscribe((response:any)=>{
      this.githubProfile = response;
    })
  
    
    this.userSearch.getRepos(this.githubUserQuery).subscribe((response:any)=>{
      this.githubRepos=response;
       this.spinner.hide()
    })
  }
}
