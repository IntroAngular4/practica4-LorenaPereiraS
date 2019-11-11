import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Project } from '../../models/project.model';
import { ProjectsService } from '../../services/projects.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  projects$: Observable<Project[]>;
  constructor(private projectService: ProjectsService) {}

  ngOnInit() {
    this.numProjects();
  }

  numProjects() {
    this.projects$ = this.projectService.getProjects();
  }

  deleteMyProjects() {
    this.projectService.deleteMyProject();
  }
  loadMyProjects() {
    environment.projects.forEach(project => this.projectService.postProject(project));
  }
}
