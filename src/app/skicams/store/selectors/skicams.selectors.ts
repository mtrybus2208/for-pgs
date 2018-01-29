import { createSelector } from '@ngrx/store';

import * as fromSkicams from './../reducers';

export const getSkiCams = createSelector(fromSkicams.getSkiCamsState, cams => cams.skicams);

export const getSkiCamsLoaded = createSelector(fromSkicams.getSkiCamsState, cams => cams.loaded);

export const getSkiCamsLoading = createSelector(fromSkicams.getSkiCamsState, cams => cams.loading);

export const getSkiCamsError = createSelector(fromSkicams.getSkiCamsState, cams => cams.error);

