import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import * as fromSkicamsStore from './../../store';
import { SkicamsService } from './../../services/skicams.service';
import { SkiCam } from './../../models/skicam.model';

@Component({
  selector: 'app-skicams',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './skicams.component.html',
  styleUrls: ['./skicams.component.scss']
})
export class SkicamsComponent implements OnInit, OnDestroy {

  loadedSub: Subscription;
  errror$: Observable<string>;
  skiCams$: Observable<SkiCam[]>;
  loading$: Observable<boolean>;
  date: Date = new Date();

  constructor(private skiCamsStore: Store<fromSkicamsStore.SkicamsState>) {}

  ngOnInit() {

    this.skiCams$ = this.skiCamsStore.select(fromSkicamsStore.getSkiCams);

    this.loading$ = this.skiCamsStore.select(fromSkicamsStore.getSkiCamsLoading);

    this.errror$ = this.skiCamsStore.select(fromSkicamsStore.getSkiCamsError);

    this.loadedSub = this.skiCamsStore.select(fromSkicamsStore.getSkiCamsLoaded)
    .subscribe( loaded => {
      if (!loaded) { this.skiCamsStore.dispatch(new fromSkicamsStore.LoadSkicams()); }
    });
  }

  ngOnDestroy() {
    this.loadedSub.unsubscribe();
  }
}
