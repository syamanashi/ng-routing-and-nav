import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';

@Injectable()
export class SelectivePreloadingStrategy implements PreloadingStrategy {

    preloadedModules: string[] = [];

    preload(route: Route, load: () => Observable<any>): Observable<any> {
        if (route.data && route.data['preload']) {
            // Add the route path to the preloaded module array.
            this.preloadedModules.push(route.path);

            // Side-effect: Log the route path to the console.
            console.log('Preloaded: ' + route.path);

            // Call the loader function, returning it as an Observable, to initiate the preload.
            return load();
        } else {
            // If route data.preload is not set to true, return a null Observable (instead of the passed in loader function) so that this route does not preload.
            return Observable.of(null);
        }
    }

}
