import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter-projects-form',
  templateUrl: './filter-projects-form.component.html',
  styleUrls: ['./filter-projects-form.component.css']
})
export class FilterProjectsFormComponent implements OnInit {
  @Output()
  searchFilterChange = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  changeFilter(searchProperty: string) {
    this.searchFilterChange.emit(searchProperty);
  }
}
