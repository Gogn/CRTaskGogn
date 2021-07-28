import {combineReducers} from '@reduxjs/toolkit';
import {ticketReducer, TicketAction} from '@modules/ticket/reducer';

export const rootReducer = combineReducers({
  ticket: ticketReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export type RootAction = TicketAction;
