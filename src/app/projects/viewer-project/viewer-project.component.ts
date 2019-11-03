import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Project } from '../../models/project.model';
import { ProjectsService } from '../../services/projects.service';

@Component({
  selector: 'app-viewer-project',
  templateUrl: './viewer-project.component.html',
  styleUrls: ['./viewer-project.component.css']
})
export class ViewerProjectComponent implements OnInit {
  projectId: number;
  proyecto$: Observable<Project>;
  constructor(activateRoute: ActivatedRoute, private projectService: ProjectsService) {
    // this.projects = this.projectService.projects;
    this.projectId = +activateRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.proyecto$ = this.projectService.getProjects();
  }
}
