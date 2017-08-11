import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import 'rxjs/add/operator/switchMap'; // Needed to process the Observable route parameters.

import { Crisis } from '../crisis';
import { CrisisService } from '../crisis.service';
import { slideInDownAnimation } from '../../../animations';
import { DialogService } from '../../../dialog.service';


@Component({
  templateUrl: './crisis-detail.component.html',
  styleUrls: ['./crisis-detail.component.scss'],
  animations: [slideInDownAnimation],
})
export class CrisisDetailComponent implements OnInit {

  @Input() crisis: Crisis;
  editName: string;

  @HostBinding('@routeAnimation') routeAnimation = true; // set to trigger.  Only care about :enter and :leave states.
  @HostBinding('style.display') display = 'block';
  @HostBinding('style.position') position = 'absolute';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private crisisService: CrisisService,
    private dialogService: DialogService,
  ) { }

  ngOnInit() {

    // Grab the crisis from the resolved data set on the route in crisis-center-routing by CrisisDetailResolverService.
    this.route.data.subscribe((data: { crisis: Crisis }) => {
      this.editName = data.crisis.name;
      this.crisis = data.crisis;
    });

    // Grap the route params 'id' and set the crisis accordingly.
    // this.route.paramMap
    //   .switchMap((params: ParamMap) => this.crisisService.getCrisis(params.get('id')))
    //   .subscribe((crisis: Crisis) => {
    //     this.crisis = crisis;
    //     this.editName = crisis.name;
    //   });
  }

  canDeactivate(): Promise<boolean> | boolean {
    // Allow synchronous navigation (`true`) if no crisis or the crisis is unchanged.
    if (!this.crisis || this.crisis.name === this.editName) {
      return true;
    }

    // Otherwise, ask the user with the dialog service and return its promise which resolves to true or false when the user decides.
    return this.dialogService.confirm('Discard changes?');
  }

  gotoCrises() {
    const crisisId = this.crisis ? this.crisis.id : null;

    // Pass along the crisis id if available so that the CrisisListComponent can select that crisis.
    // And a totally useless 'foo' parameter for kicks.
    // Relative navigation back to crisis-center welcome message (utilizes a relative path along with "matrix URL Notation" parameter key value pairs):
    this.router.navigate(['../', { id: crisisId, foo: 'foo' }], { relativeTo: this.route });

    // Absolute navigation:
    // this.router.navigate(['/crisis-center', { id: crisisId, foo: 'foo' }]);
  }

  onCancel() {
    this.gotoCrises();
  }

  onSave() {
    this.crisis.name = this.editName;
    this.gotoCrises();
  }

}
