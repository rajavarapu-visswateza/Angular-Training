import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { ValueState } from './math.reducer';

export const selectResult = (state: AppState) => state.resultValue;

export const selectResultValue = createSelector(
  selectResult,
  (state: ValueState) => state.result
);