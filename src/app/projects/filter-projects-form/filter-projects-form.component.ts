import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter-projects-form',
  templateUrl: './filter-projects-form.component.html',
  styleUrls: ['./filter-projects-form.component.css']
})
export class FilterProjectsFormComponent implements OnInit {
  @Output()
  projectName = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  search(nameSearch: string) {
    this.projectName.emit(nameSearch);
  }
}
