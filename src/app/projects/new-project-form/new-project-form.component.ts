import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-new-project-form',
  templateUrl: './new-project-form.component.html',
  styleUrls: ['./new-project-form.component.css']
})
export class NewProjectFormComponent implements OnInit {
  @Input()
  title: String;

  @Output()
  public newProject = new EventEmitter<string>();

  public projectName: string;

  constructor() {}

  ngOnInit() {
    this.projectName = '';
  }

  newProjectEvent() {
    this.newProject.emit(this.projectName);
    this.projectName = '';
  }
}
