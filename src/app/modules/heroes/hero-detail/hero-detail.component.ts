import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import 'rxjs/add/operator/switchMap'; // Needed to process the Observable route parameters.

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

  @Input() hero: Hero; // Stores hero instance that gets updated by the switchMap of the Route's paramMap.

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: HeroService,
  ) { }

  ngOnInit() {

    // https://angular.io/guide/router#activatedroute-the-one-stop-shop-for-route-information
    // Use the observable ParamMap to detect the 'id' route praram value on page load AND when that param value changes.
    //    When the paramMap changes, you get() the id parameter from the changed parameters.
    //    Then you tell the HeroService to fetch the hero with that id and return the result of the HeroService request.
    //    You might think to use the RxJS map operator. But the HeroService returns an Observable<Hero>. Your subscription wants the Hero, not an Observable<Hero>. So you flatten the Observable with the switchMap operator instead.
    //    The switchMap operator also cancels previous in-flight requests. If the user re-navigates to this route with a new id while the HeroService is still retrieving the old id, switchMap discards that old request and returns the hero for the new id.
    //    Finally, you activate the observable with subscribe method and (re)set the component's hero property with the retrieved hero.
    //    Note: You do not need to unsubscribe from ActivatedRoute as the Router destroys a routed component when it is no longer needed and the injected ActivatedRoute dies with it.

    /**
     * NOTE: When you know for certain that a HeroDetailComponent instance will never, never, ever be re-used, you can simplify the code with the snapshot instead of using a .switchMap, like so:
     *    const id = this.route.snapshot.paramMap.get('id');
     *    this.service.getHero(id).subscribe((hero: Hero) => this.hero = hero);
     */

    this.route.paramMap
      .switchMap((params: ParamMap) => this.service.getHero(params.get('id')))
      .subscribe((hero: Hero) => this.hero = hero);

  }

  gotoHeroes() {
    this.router.navigate(['/heroes']);
  }

}
