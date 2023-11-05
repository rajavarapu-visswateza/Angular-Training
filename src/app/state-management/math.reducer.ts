import { createReducer, on } from '@ngrx/store';
import { add } from './math.action';

export interface ValueState{
    result : number;
}

export const initialState : ValueState ={
    result : 0
}

export const addReducer = createReducer(
    initialState,
    on(add, (state, {firstValue, lastValue}) => ({
        ...state,
        result: (firstValue + lastValue)
    }))
)