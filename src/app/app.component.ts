import {Component} from '@angular/core';
@Component({
  moduleId: module.id,
  selector: 'app-root',
  styleUrls: ['app.component.css'],
  template: `
    <h1>{{title}}</h1>
    <nav>
        <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
        <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
    </nav>
    <router-outlet></router-outlet>
  `
})

export class AppComponent {
  title = 'Tour of Heroes';
}
