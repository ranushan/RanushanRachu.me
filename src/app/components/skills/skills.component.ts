import { Component } from '@angular/core';
import { SKILLS } from '@data/skills'

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  template: `
    <h1 class="section-title" id="skills" style="text-align: left;">Skills</h1>
    <div class="skills-subsection">
      <ul>
        @for (skill of skills; track skill) {
          <li> {{ skill }}</li>
        } @empty {
          <li> There are no skills.</li>
        } 
      </ul>
    </div>
  `,
  styles: `
    $color_1: var(--paragraph-colour);
    $color_2: var(--skill-bullet-colour);
    $color_3: var(--main-green);

    ul {
      text-align: left;
      color: $color_1;
      font-size: 20px;
      list-style: none;
      -webkit-column-count: 4;
      -moz-column-count: 4;
      column-count: 4;
      li {
        &::before {
          -webkit-transition: all .1s ease-in;
          -moz-transition: all .1s ease-in;
          -o-transition: all .1s ease-in;
          -ms-transition: all .1s ease-in;
          transition: all .1s ease-in;
          content: "\\2022";
          color: $color_2;
          display: inline-block;
          width: 1em;
          margin-left: -0.5em;
        }
        &:hover {
          &::before {
            color: $color_3;
          }
        }
      }
    }
    @media only screen and (max-width: 1270px) {
      ul {
        -webkit-column-count: 3;
        -moz-column-count: 3;
        column-count: 3;
      }
    }
    @media only screen and (max-width: 1100px) {
      ul {
        font-size: 18px;
        -webkit-column-count: 2;
        -moz-column-count: 2;
        column-count: 2;
      }
    }
    @media only screen and (max-width: 860px) {
      ul {
        -webkit-column-count: 4;
        -moz-column-count: 4;
        column-count: 4;
      }
    }
    @media only screen and (max-width: 600px) {
      ul {
        font-size: 18px;
        -webkit-column-count: 3;
        -moz-column-count: 3;
        column-count: 3;
      }
    }
    @media only screen and (max-width: 470px) {
      ul {
        text-align: center;
        font-size: 18px;
        -webkit-column-count: 2;
        -moz-column-count: 2;
        column-count: 2;
        margin-left: -2em;
        li {
          &::before {
            display: none;
          }
        }
      }
    }
  `
})
export class SkillsComponent {

  readonly skills: Array<string> = SKILLS;

}