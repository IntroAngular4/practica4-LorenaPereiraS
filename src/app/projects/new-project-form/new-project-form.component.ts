import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  formProject: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.buildForm();
  }
  crearProyecto() {
    const projectNameCurrent = this.formProject.value['projectName'];
    this.formProject.reset();
    this.newProject.emit(projectNameCurrent);
  }

  private buildForm() {
    this.formProject = this.formBuilder.group({
      projectName: ['', [Validators.required]]
    });
  }
}
