import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @Input()
  projects: Array<Project>;

  constructor() {}

  ngOnInit() {}
}
