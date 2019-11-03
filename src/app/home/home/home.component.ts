import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../../models/project.model';
import { ProjectsService } from '../../services/projects.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  proyectos$: Observable<Project[]>;
  constructor(private projectService: ProjectsService) {}

  ngOnInit() {
    this.numProjects();
  }

  numProjects() {
    this.proyectos$ = this.projectService.getProjects();
  }

  deleteMyRates() {
    this.projectService.deleteMyRates();
  }
}
