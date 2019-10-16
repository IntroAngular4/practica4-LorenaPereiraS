import { Component, OnInit } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Project } from '../models/project.model';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {
  public title = 'New Project';
  public project: Project;
  public projects = environment.projects;
  constructor() {}

  ngOnInit() {
    this.project = {
      id: this.projects.length,
      name: ''
    };
  }
  public newProject() {
    this.project.id = this.projects.length;
    this.projects.push({ ...this.project });
    environment.projects = this.projects;
  }
}
