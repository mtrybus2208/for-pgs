import * as fromSkicams from './skicams.actions';

describe('Skicams Actions', () => {

  describe('LoadSkicams', () => {
    it('should create an action', () => {
      const action = new fromSkicams.LoadSkicams();

      expect({ ...action }).toEqual({
        type: fromSkicams.LOAD_SKICAMS,
      });
    });
  });

  describe('LoadSkicamsSuccess', () => {
    it('should create an action', () => {
      const payload: any = {};
      const action = new fromSkicams.LoadSkicamsSuccess(payload);

      expect({ ...action }).toEqual({
        type: fromSkicams.LOAD_SKICAMS_SUCCESS,
        payload,
      });
    });
  });

  describe('LoadSkicamsFail', () => {
    it('should create an action', () => {
      const payload: any = {};
      const action = new fromSkicams.LoadSkicamsFail(payload);

      expect({ ...action }).toEqual({
        type: fromSkicams.LOAD_SKICAMS_FAIL,
        payload,
      });
    });
  });
});

