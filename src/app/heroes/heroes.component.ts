import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];
  // hero: Hero = {
  //   id:1,
  //   name:'Windstorm'
  // };
  
  constructor(private heroService: HeroService) { }

  // getHeroes(): Observable<Hero[]> {
  //   // this.heroes = this.heroService.getHeroes();
  //   return of(HEROES);
  // }

  getHeroes(): void {
    // this.heroService.getHeroes();
    this.heroes = this.heroService.getHeroes2();
    // .subscribe(heroes => this.heroes = heroes);
  }

  selectedHero: Hero;

  onSelect(hero: Hero): void {
  this.selectedHero = hero;
}

  ngOnInit() {
    this.getHeroes();
  }

}
