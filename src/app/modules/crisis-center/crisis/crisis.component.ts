import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import 'rxjs/add/operator/switchMap'; // Needed to process the Observable route parameters.

import { Crisis } from '../crisis';
import { CrisisService } from '../crisis.service';
import { slideInDownAnimation } from '../../../animations';


@Component({
  templateUrl: './crisis.component.html',
  styleUrls: ['./crisis.component.scss'],
  animations: [slideInDownAnimation],
})
export class CrisisComponent implements OnInit {

  @Input() crisis: Crisis;

  @HostBinding('@routeAnimation') routeAnimation = true; // set to trigger.  Only care about :enter and :leave states.
  @HostBinding('style.display') display = 'block';
  @HostBinding('style.position') position = 'absolute';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: CrisisService,
  ) { }

  ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.service.getCrisis(params.get('id')))
      .subscribe((crisis: Crisis) => this.crisis = crisis);
  }

  gotoCrises() {
    const crisisId = this.crisis ? this.crisis.id : null;
    this.router.navigate(['/crisis-center', { id: crisisId, foo: 'foo' }]);
  }

}
