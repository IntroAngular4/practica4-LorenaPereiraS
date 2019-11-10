import { Component, Input, OnInit } from '@angular/core';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  @Input()
  projects: Array<Project>;
  proyectosMostrados: Project[];

  constructor() {}

  ngOnInit() {
    this.proyectosMostrados = this.projects;
  }

  aplicarFiltro(texto: string) {
    //ToLowerCase para que no distinga entre mayúsculas y minúsculas.
    const textoLowerCase = texto.toLowerCase();

    this.proyectosMostrados = this.projects.filter(p => p.name.toLowerCase().includes(textoLowerCase));
  }
}
