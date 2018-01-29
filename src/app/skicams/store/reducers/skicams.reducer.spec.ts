import * as fromSkicams from './skicams.reducer';
import * as fromActions from './../actions/skicams.actions';

import { SkiCam } from './../../models/skicam.model';

describe('Skicam Reducer', () => {

  describe('undefined action', () => {
    it('should return the default state', () => {
      const { initialState } = fromSkicams;
      const action = {} as any;
      const state = fromSkicams.reducer(undefined, action);

      expect(state).toBe(initialState);
    });
  });

  describe('LOAD_SKICAMS', () => {
    it('should set loading to true', () => {
      const { initialState } = fromSkicams;
      const action = new fromActions.LoadSkicams();
      const state = fromSkicams.reducer(initialState, action);

      expect(state.loaded).toEqual(false);
      expect(state.loading).toEqual(true);
      expect(state.skicams).toEqual(null);
      expect(state.error).toEqual(null);
    });
  });

  describe('LOAD_SKICAMS_SUCCESS', () => {
    it('should return array of SkiCams', () => {

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
      const { initialState } = fromSkicams;
      const action = new fromActions.LoadSkicamsSuccess(skiCams);
      const state = fromSkicams.reducer(initialState, action);

      expect(state.loaded).toEqual(true);
      expect(state.loading).toEqual(false);
      expect(state.skicams).toEqual(skiCams);
      expect(state.error).toEqual(null);
    });
  });

  describe('LOAD_SKICAMS_FAIL', () => {
    it('should return error message', () => {

      const errorMsg = 'Error message';
      const { initialState } = fromSkicams;
      const action = new fromActions.LoadSkicamsFail(errorMsg);
      const state = fromSkicams.reducer(initialState, action);

      expect(state.loaded).toEqual(false);
      expect(state.loading).toEqual(false);
      expect(state.error).toEqual(errorMsg);
    });
  });

});
