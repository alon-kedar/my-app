import { OnInit } from '@angular/core';
import {Component} from '@angular/core';
import {Hero} from './hero';
import {HeroService} from "./hero.service";
import {Router} from "@angular/router";

@Component({
  selector: 'my-heroes',
  templateUrl: 'heroes.component.html',
  styleUrls: ['heroes.component.css']
})

export class HeroesComponent implements OnInit{
  ngOnInit() : void {
    this.getHeroes();
  }

  constructor(
    private heroService: HeroService,
    private router: Router
  ) {}

  title = 'Tour of Heroes';
  selectedHero: Hero;
  heroes: Hero[];

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  gotoDetail(): void {
    this.router.navigate(['detail', this.selectedHero.id]);
  }
}
