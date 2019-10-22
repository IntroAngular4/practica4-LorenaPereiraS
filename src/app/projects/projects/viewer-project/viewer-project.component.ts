import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../../models/project.model';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-viewer-project',
  templateUrl: './viewer-project.component.html',
  styleUrls: ['./viewer-project.component.css']
})
export class ViewerProjectComponent implements OnInit {
  public projectId: number;
  projects: Array<Project> = [];
  project: Project;
  constructor(activateRoute: ActivatedRoute, private projectService: ProjectsService) {
    this.projects = this.projectService.projects;
    this.projectId = +activateRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.project = this.projects.find(p => p.id === this.projectId);
  }
}
