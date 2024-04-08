import { createAction, createReducer, on } from '@ngrx/store';

export interface AppState {
    currentContent: string;
}

export const initialAppState: AppState = {
    currentContent: 'dashboard'
}

export const switchContent = createAction('[Global State] Switch Content', (content: string) => ({ content }));

export const contentReducer = createReducer(
    initialAppState,
    on(switchContent, (state, { content }) => ({ ...state, currentContent: content }))
);