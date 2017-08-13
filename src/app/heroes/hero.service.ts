import { Injectable } from '@angular/core';

// import { Observable } from 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {

  getHeroes(): Observable<Hero[]> {
    // This would usually be an http request observable.
    return Observable.of(HEROES);
  }

  getHeroesSlowly(): Observable<Hero[]> {
    return Observable.of(HEROES).delay(2000);
  }

  getHero(id: number | string): Observable<Hero> {
    return this.getHeroes().map((heroes: Hero[]) => heroes.find(hero => hero.id === +id))
  }
}
