import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromSkiCam from './skicams.reducer';

export * from './skicams.reducer';

export const getSkiCamsState = createFeatureSelector<any>('skiCams');
