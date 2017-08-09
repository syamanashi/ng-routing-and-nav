import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'hero-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.scss'],
  // providers: [HeroService],
})
export class HeroListComponent implements OnInit {

  title = 'Tour of Heroes';
  heroes: Observable<Hero[]>;
  private selectedId: number;

  constructor(
    private heroService: HeroService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  // getHeroes(): void {
  //   this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  // }

  ngOnInit()  {
    // this.getHeroes();
    this.heroes = this.route.paramMap
      .switchMap((params: ParamMap) => {
        this.selectedId = +params.get('id');
        return this.heroService.getHeroes();
      })
  }

  isSelected(hero: Hero): boolean {
    return hero.id === this.selectedId;
  }

  onSelect(hero: Hero): void {
    // this.selectedHero = hero;
    this.router.navigate(['/hero', hero.id]);
  }

}
