import { Component, Inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon'
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Project } from '@data/projects';

@Component({
  selector: 'app-project-dialog',
  standalone: true,
  imports: [MatIconModule],
  template: `
    <div class="project-modal">
      <h1 class="modal-name" style="text-align: center;">{{data.name}} ({{data.year}})</h1>
      <h3 class="modal-description" style="text-align: center;">Developed with: <b class="technologies">{{data.technologies}}</b></h3>
      <div class="project-links-container">
          @if (data.projectLink) {
            <a class="project-link" href={{data.projectLink}} rel="noreferrer" target="_blank">
              <mat-icon aria-hidden="false" aria-label="open_in_new" fontIcon="open_in_new"/>
            </a>
          }
          @if (data.githubLink) {
            <a class="project-link" href={{data.githubLink}} rel="noreferrer" target="_blank">
            <mat-icon aria-hidden="false" aria-label="code" fontIcon="code"/>
          </a>
          }
      </div>
      <p class="modal-description" [innerHTML]="data.description"></p>
      <picture>
          <source srcset="assets/projects/{{data.screenshot}}.webp" type="image/webp">
          <source srcset="assets/projects/{{data.screenshot}}.jpg" type="image/jpeg">
          <img class="screenshot" src="{{data.screenshot}}.webp" alt="{{data.name}} screenshot">
      </picture>
    </div>
  `,
  styles: `
    $color_1: black;
    $color_2: rgb(0, 49, 82);
    $color_3: var(--modal-title-colour);
    $color_4: var(--modal-text-colour);
    $color_5: var(--modal-link-colour);
    $color_6: var(--link-hover-colour);

    .project-modal {
      color: $color_1;
    }
    .modal-name {
      -webkit-transition: all .2s ease-in;
      -moz-transition: all .2s ease-in;
      -o-transition: all .2s ease-in;
      -ms-transition: all .2s ease-in;
      transition: all .2s ease-in;
      color: $color_2;
      font-size: 35px;
      margin: 15px 15px 10px 15px;
      color: $color_3;
    }
    .technologies {
      font-weight: 300;
    }
    .modal-description {
      margin: 10px auto 10px auto;
      color: $color_4;
      line-height: 1.4;
    }
    .screenshot {
      width: 100%;
      height: auto;
      border-radius: 5px;
      box-shadow: 0px 0px 10px #0000009a;
      margin: 20px auto 0 auto;
    }
    .project-links-container {
      display: flex;
      margin: auto;
      padding-top: 20px;
      padding-top: 10px;
      justify-content: center;
    }
    .project-link {
      -webkit-transition: all .2s ease-in;
      -moz-transition: all .2s ease-in;
      -o-transition: all .2s ease-in;
      -ms-transition: all .2s ease-in;
      transition: all .2s ease-in;
      color: $color_5;
      width: 30px;
      height: 30px;
      margin: 0 10px 0 10px;
      &:hover {
        color: $color_6;
      }
    }
  `
})
export class ProjectDialog {
  
  constructor(@Inject(MAT_DIALOG_DATA) public readonly data: IProjectDataDialog) {}

}

export type IProjectDataDialog = Omit<Project, 'emoji' | 'shortDescription' | 'longDescription'> & { description: string };