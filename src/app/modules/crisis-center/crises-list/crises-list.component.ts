import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

import { Crisis } from '../crisis';
import { CrisisService } from '../crisis.service';

@Component({
  selector: 'hero-crises-list',
  templateUrl: './crises-list.component.html',
  styleUrls: ['./crises-list.component.scss']
})
export class CrisesListComponent implements OnInit {

  crises: Observable<Crisis[]>;
  private selectedId: number;

  constructor(
    private service: CrisisService,
    private router: Router,
    private route: ActivatedRoute,

  ) { }

  ngOnInit() {
    this.crises = this.route.paramMap
      .switchMap((params: ParamMap) => {
        this.selectedId = +params.get('id');
        return this.service.getCrises();
      })
  }

  isSelected(crisis: Crisis): boolean {
    return crisis.id === this.selectedId;
  }

  onSelect(crisis: Crisis): void {
    this.router.navigate(['/crisis', crisis.id]);
  }

}
