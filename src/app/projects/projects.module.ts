import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProjectsRoutingModule } from './projects-routing.module';
import { DashboardComponent } from './projects/dashboard/dashboard.component';
import { FilterProjectsFormComponent } from './projects/filter-projects-form/filter-projects-form.component';
import { NewProjectComponent } from './projects/new-project/new-project.component';
import { ProjectListComponent } from './projects/project-list/project-list.component';
import { ProjectsComponent } from './projects/projects.component';
import { ViewerProjectFormComponent } from './projects/viewer-project-form/viewer-project-form.component';
import { ViewerProjectComponent } from './projects/viewer-project/viewer-project.component';
import { NewProjectFormComponent } from './projects/new-project-form/new-project-form.component';

@NgModule({
  declarations: [
    ProjectsComponent,
    ViewerProjectComponent,
    NewProjectComponent,
    DashboardComponent,
    FilterProjectsFormComponent,
    ProjectListComponent,
    ViewerProjectFormComponent,
    NewProjectFormComponent
  ],
  imports: [CommonModule, ProjectsRoutingModule, FormsModule]
})
export class ProjectsModule {}
