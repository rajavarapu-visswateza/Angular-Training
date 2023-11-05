import { createAction, props } from '@ngrx/store';

export const add = createAction('[Math Component] Add', 
    props<{firstValue:number, lastValue:number}>()
);