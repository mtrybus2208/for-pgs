import * as fromSkicams from './../actions/skicams.actions';
import { SkiCam } from './../../models/skicam.model';

export interface SkicamsState {
  skicams: SkiCam[];
  loaded: boolean;
  loading: boolean;
  error: string;
}

export const initialState: SkicamsState = {
  skicams: null,
  loaded: false,
  loading: false,
  error: null,
};

export function reducer(state = initialState, action: fromSkicams.LoadSkicamsAction): SkicamsState {
  switch (action.type) {
    case fromSkicams.LOAD_SKICAMS: {
      return {
        ...state,
        loading: true,
      };
    }
    case fromSkicams.LOAD_SKICAMS_SUCCESS: {
      return {
        ...state,
        skicams: action.payload,
        loading: false,
        loaded: true,
        error: null,
      };
    }
    case fromSkicams.LOAD_SKICAMS_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.payload,
      };
    }
    default: {
      return state;
    }
  }
}
