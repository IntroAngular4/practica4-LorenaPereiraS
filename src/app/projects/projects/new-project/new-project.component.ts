import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project.model';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {
  public title = 'New Project';
  public project: Project;
  public projects: Array<Project> = [];
  constructor(private projectService: ProjectsService) {
    this.projects = this.projectService.projects;
  }

  ngOnInit() {
    this.project = {
      id: this.projects.length,
      name: ''
    };
  }
  public newProject(event: Project) {
    event.id = this.projects.length;
    this.projects.push({ ...event });
    this.projectService.projects = this.projects;
    console.log(this.projectService.projects.length);
  }
}
