import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class GithubApiService {

  constructor(private http:HttpClient) { }

  getGithubUser(name:string){
    return this.http.get(`https://api.github.com/users/${name}`)
  }

  getRepos(name:string){
    return this.http.get(`https://api.github.com/users/${name}/repos`)
  }

  getReposIn(name:string,perPage:number,page:number){
    return this.http.get(`https://api.github.com/users/${name}/repos?per_page=${perPage}&page=${page}`)
  }

  getRepoLanguage(lang:string){
    return this.http.get(`${lang}`)
  }
}
