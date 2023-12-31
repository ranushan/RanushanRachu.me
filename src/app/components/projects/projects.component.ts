import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
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

}
