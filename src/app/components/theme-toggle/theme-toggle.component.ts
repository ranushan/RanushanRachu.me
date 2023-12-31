import { Component } from '@angular/core';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [],
  template: `
    <label class="toggle-control">
      <input type="checkbox" checked="checked" id="theme-toggle">
      <span class="control"></span>
    </label>
  `,
  styles: `
    $background-color_1: #00b89e;
    $background-color_2: #004037;
    .toggle-control {
      padding-left: 100px;
      margin-bottom: 12px;
      cursor: pointer;
      font-size: 10px;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
        &:checked {
          ~ {
            .control {
              background-color: $background-color_1;
              &:after {
                left: 27px;
              }
            }
          }
        }
      }
      .control {
        position: absolute;
        top: 0;
        left: 0;
        height: 25px;
        width: 50px;
        border-radius: 25px;
        background-color: $background-color_2;
        transition: background-color 0.15s ease-in;
        &:after {
          content: "";
          position: absolute;
          left: 3px;
          top: 3px;
          width: 20px;
          height: 20px;
          border-radius: 25px;
          background: white;
          transition: left 0.15s ease-in;
        }
      }
    }
  `
})
export class ThemeToggleComponent {
}