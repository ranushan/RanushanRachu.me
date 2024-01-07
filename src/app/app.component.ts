import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ThemeToggleComponent } from '@component/theme-toggle';
import { SkillsComponent } from '@component/skills';
import { ProjectsComponent } from '@component/projects';
import { ProfileComponent } from '@component/profile';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,
            ThemeToggleComponent, SkillsComponent, ProjectsComponent,
            ProfileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'RanushanRachu.me';
}
