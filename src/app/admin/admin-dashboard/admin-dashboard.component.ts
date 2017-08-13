import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { SelectivePreloadingStrategy } from '../../selective-preloading-strategy';

@Component({
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

  sessionId: Observable<string>;
  token: Observable<string>;
  preloadedModules: string[];

  constructor(
    private route: ActivatedRoute,
    private preloadStrategy: SelectivePreloadingStrategy,
  ) {
    this.preloadedModules = preloadStrategy.preloadedModules;
  }

  ngOnInit() {
    // Capture the session ID if available.
    this.sessionId = this.route.queryParamMap.map(params => params.get('session_id') || 'none');

    // Capture the fragment if available.
    this.token = this.route.fragment.map(fragment => fragment || 'none');
  }

}
