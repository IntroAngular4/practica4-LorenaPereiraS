import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-new-project-form',
  templateUrl: './new-project-form.component.html',
  styleUrls: ['./new-project-form.component.css']
})
export class NewProjectFormComponent implements OnInit {
  @Input()
  title: String;
  @Input()
  project: Project;

  @Input()
  projects: Array<Project>;

  @Output()
  public newProject = new EventEmitter<Project>();

  constructor() {}

  ngOnInit() {}
}
