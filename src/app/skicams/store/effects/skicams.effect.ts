import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Store, Action } from '@ngrx/store';

import { flatMap, catchError, map, tap, switchMap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';
import { Observable } from 'rxjs/Observable';

import * as skiCamsActions from './../actions';

import { SkicamsService } from './../../services/skicams.service';
import { SkiCam } from './../../models/skicam.model';

@Injectable()
export class SkiCamsEffects {
  constructor(
    private actions$: Actions,
    private skiCamsService: SkicamsService
  ) {}

  @Effect()
  loadSkiCams$ = this.actions$
  .ofType(skiCamsActions.LOAD_SKICAMS)
  .pipe(
    switchMap(() => {
      return this.skiCamsService.getSkicams()
        .pipe(
          map(skiCams => new skiCamsActions.LoadSkicamsSuccess(skiCams)),
          catchError(error => of(new skiCamsActions.LoadSkicamsFail('Server Error'))),
        );
    })
  );
}
