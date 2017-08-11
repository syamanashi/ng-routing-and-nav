import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import 'rxjs/add/operator/switchMap'; // Needed to process the Observable route parameters.

import { Crisis } from '../crisis';
import { CrisisService } from '../crisis.service';
import { slideInDownAnimation } from '../../../animations';


@Component({
  templateUrl: './crisis-detail.component.html',
  styleUrls: ['./crisis-detail.component.scss'],
  animations: [slideInDownAnimation],
})
export class CrisisDetailComponent implements OnInit {

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

    // Relative navigation back to crisis-center welcome message (utilizes a relative path along with "matrix URL Notation" parameter key value pairs):
    this.router.navigate(['../', { id: crisisId, foo: 'foo' }], { relativeTo: this.route });

    // Absolute navigation:
    // this.router.navigate(['/crisis-center', { id: crisisId, foo: 'foo' }]);
  }

}