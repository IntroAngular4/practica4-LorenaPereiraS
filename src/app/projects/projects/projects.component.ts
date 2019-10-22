import { Component, OnInit } from '@angular/core';
import { Project } from '../models/project.model';
import { ProjectsService } from './projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: Array<Project>;
  constructor(private projectService: ProjectsService) {
    this.projects = this.projectService.projects;
  }

  ngOnInit() {}
}
