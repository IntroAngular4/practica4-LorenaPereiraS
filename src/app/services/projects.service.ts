import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private projects: Project[];
  private myProjects: any = null;
  private urlApi = 'https://api-base.herokuapp.com/api/pub/projects';

  constructor(private httpClient: HttpClient) {
    this.projects = [];
  }

  getProjects() {
    return this.httpClient.get<any>(this.urlApi);
  }

  postProject(project: Project) {
    return this.httpClient.post(this.urlApi, project).subscribe();
  }
  public deleteMyProject() {
    this.httpClient.delete(this.urlApi).subscribe();
  }
}
