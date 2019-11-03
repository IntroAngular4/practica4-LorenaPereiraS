import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../../models/project.model';
import { ProjectsService } from '../../services/projects.service';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {
  public title = 'New Project';
  proyectos$: Observable<Project[]>;
  project: Project = { name: '' };

  constructor(private projectService: ProjectsService) {}

  ngOnInit() {
    this.numProjects();
  }

  numProjects() {
    this.proyectos$ = this.projectService.getProjects();
  }

  public newProject(event: string, id: number) {
    this.project.id = id;
    this.project.name = event;
    this.projectService.postProject(this.project);
  }
}
