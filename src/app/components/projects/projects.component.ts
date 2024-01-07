import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PROJECTS, Project } from '@data/projects';
import { IProjectDataDialog, ProjectDialog } from '@dialogs/project';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  template: `
    <h1 class="section-title" id="projects" style="text-align: left;">Projects</h1>
    <div class="project-subsection">
      @for (proj of projects; track proj) {
        <div class="project-item" tabindex="0" style="background-image: url('assets/screenshots/{{proj.screenshot}}.webp')"
          (click)="projectDialog(proj.name, proj.technologies, proj.year, proj.longDescription, proj.screenshot, proj.githubLink, proj.projectLink)">
          <h2 class="project-name">{{proj.name}}<span [innerHTML]="proj.emoji"></span></h2>
          <h2 class="project-year">{{proj.year}}</h2>
          <h2 class="project-tech">{{proj.technologies}}</h2>
          <p>{{proj.shortDescription}}</p>
        </div>
      } @empty {
        <li> There are no projects.</li>
      }
    </div>
  `,
  styles: `
    $color_1: var(--item-subtitle);
    $color_2: var(--item-small-text);

    .project-name {
      margin: 8px auto 5px auto;
      text-align: center;
      font-size: 30px;
    }
    .project-year {
      font-size: 25px;
      font-weight: 300;
      margin: 5px auto 5px auto;
      color: $color_1;
    }
    .project-tech {
      margin: 8px auto 5px auto;
      text-align: center;
      font-size: 18px;
      color: $color_2;
      font-weight: 300;
    }
  `
})
export class ProjectsComponent {

  readonly projects : Array<Project> = PROJECTS;

  private readonly matDialog = inject(MatDialog);

  projectDialog = (name: string, technologies: string, year: string, description: string,
                  screenshot: string, githubLink?: string, projectLink?: string): void => {
    this.matDialog.open<ProjectDialog, IProjectDataDialog>(ProjectDialog, {
      data: { name, technologies, year, description, screenshot, githubLink, projectLink }
    })
  };
}
