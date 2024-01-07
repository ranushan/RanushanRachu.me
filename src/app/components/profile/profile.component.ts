import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  template: `
    <!-- <h1><Annotation bind:visible type="highlight" color="var(--intro-highlight-colour)">Ranushan Rachu</Annotation></h1>
    <h2 class="status">SDE <b style="color: var(--paragraph-colour); font-weight: 300">@</b> Enedis</h2>
    <h2 class="location">Paris, FR</h2>
    <div class="social-links-container">
      <a class="social-link linkedin-link" aria-label="LinkedIn" href="https://linkedin.com/in/ranushan/" rel="noreferrer" target="_blank"><LinkedInLogo /></a>
      <a class="social-link github-link" aria-label="GitHub" href="https://github.com/ranushan/" rel="noreferrer" target="_blank"><GitHubLogo /></a>
      <a class="social-link twitter-link" aria-label="Twitter" href="https://twitter.com/ranushan/" rel="noreferrer" target="_blank"><TwitterLogo /></a>
      <a class="social-link" aria-label="Email" href="mailto:profile@ranushan.me" rel="noreferrer" target="_blank"><MailIcon /></a>
    </div> -->

    <div class="headshot">
      <picture>
        <source class="headshot" srcset={{headshotPath}}.webp type="image/webp">
        <source class="headshot" srcset={{headshotPath}}.png type="image/png">
        <img class="headshot" id="headshot" width="200px" height="200px" src={{headshotPath}}.webp alt="Current headshot"/>
      </picture>
    </div>
  `,
  styles: `
    $color_1: var(--intro-link-colour);
    $color_2: #0077b5;
    $color_3: #4078c0;
    $color_4: #1da1f2;
    $color_5: var(--link-hover-colour);

    .status {
      font-size: 22px;
      margin-top: -20px;
      margin-bottom: 20px;
      font-weight: 500;
    }
    .location {
      margin-top: -10px;
      margin-bottom: 20px;
      font-weight: 300;
    }
    .headshot {
      align-self: center;
      margin-left: auto;
      margin-right: auto;
      padding-top: 0;
      width: 200px;
      height: 200px;
    }
    .social-links-container {
      display: flex;
      margin: auto;
      padding-top: 10px;
      padding-bottom: 25px;
      color: $color_1;
      justify-content: center;
    }
    .social-link {
      color: $color_1;
      margin-left: 8px;
      margin-right: 8px;
      width: 40px;
      height: 40px;
    }
    .linkedin-link {
      &:hover {
        color: $color_2;
      }
    }
    .github-link {
      &:hover {
        color: $color_3;
      }
    }
    .twitter-link {
      &:hover {
        color: $color_4;
      }
    }
    a {
      &:hover {
        color: $color_5;
      }
    }
  `
})
export class ProfileComponent {

  protected readonly headshotPath = 'assets/headshots/clean_headshot';

}
