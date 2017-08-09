import { Injectable } from '@angular/core';

// import { Observable } from 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/delay';

import { Crisis } from './crisis';
import { CRISES } from './mock-crises';

@Injectable()
export class CrisisService {

  getCrises(): Observable<Crisis[]> {
    // This would usually be an http request observable.
    return Observable.of(CRISES);
  }

  getCrisesSlowly(): Observable<Crisis[]> {
    return Observable.of(CRISES).delay(2000);
  }

  getCrisis(id: number | string): Observable<Crisis> {
    return this.getCrises().map((crises: Crisis[]) => crises.find(crisis => crisis.id === +id))
  }
}
