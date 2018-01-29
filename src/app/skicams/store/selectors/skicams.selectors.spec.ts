import { TestBed } from '@angular/core/testing';
import { StoreModule, Store, combineReducers } from '@ngrx/store';

import * as fromReducers from './../reducers';
import * as fromActions from './../actions';
import * as fromSelectors from './../selectors/skicams.selectors';
import { SkiCam } from './../../models/skicam.model';

describe('Skicam Selectors', () => {
  let store: Store<fromReducers.SkicamsState>;

  const skiCams: SkiCam[] = [
    new SkiCam({
      name: 'Skicam #1',
      cams: [],
    }),
    new SkiCam({
      name: 'Skicam #2',
      cams: [],
    }),
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({
          'skiCams': fromReducers.reducer,
        })
      ]
    });

    store = TestBed.get(Store);
    spyOn(store, 'dispatch').and.callThrough();
  });

  describe('getSkiCams', () => {
    it('should return array of SkiCams', () => {
      let result;
      store
        .select(fromSelectors.getSkiCams)
        .subscribe(value => {
          result = value;
        });

      expect(result).toEqual(null);

      store.dispatch(new fromActions.LoadSkicamsSuccess(skiCams));
      expect(result).toEqual(skiCams);
    });
  });

  describe('getSkiCamsLoaded', () => {
    it('should return loaded value', () => {
      let result;
      store
        .select(fromSelectors.getSkiCamsLoaded)
        .subscribe(value => {
          result = value;
        });

      expect(result).toEqual(false);

      store.dispatch(new fromActions.LoadSkicamsSuccess(skiCams));
      expect(result).toEqual(true);
    });
  });

  describe('getSkiCamsLoading', () => {
    it('should return loading value', () => {
      let result;
      store
        .select(fromSelectors.getSkiCamsLoading)
        .subscribe(value => {
          result = value;
        });

      expect(result).toEqual(false);

      store.dispatch(new fromActions.LoadSkicams());
      expect(result).toEqual(true);
    });
  });

  describe('getSkiCamsError', () => {
    it('should return error message', () => {
      let result;
      store
        .select(fromSelectors.getSkiCamsError)
        .subscribe(value => {
          result = value;
        });

      expect(result).toEqual(null);

      const errorMsg = 'Error Message';
      store.dispatch(new fromActions.LoadSkicamsFail(errorMsg));
      expect(result).toEqual(errorMsg);
    });
  });
});

 