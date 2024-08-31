import {
        DISPLAY_NOTIFICATION_DRAWER, 
        HIDE_NOTIFICATION_DRAWER, 
        LOGIN_SUCCESS, LOGIN_FAILURE, 
        LOGOUT, 
        LOGIN,
    } from '../actions/uiActionTypes';
import { Map } from 'immutable';

export const defaultState = Map({
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: null,
});

export default function uiReducer(state = Map(defaultState), action) {
    switch(action.type) {
        case DISPLAY_NOTIFICATION_DRAWER:
            return state.set('isNotificationDrawerVisible', true);

        case HIDE_NOTIFICATION_DRAWER:
            return state.set('isNotificationDrawerVisible', false);

        case LOGIN_SUCCESS:
            return state.set('isUserLoggedIn', true);

        case LOGIN_FAILURE:
            return state.set('isUserLoggedIn', false);
        
        case LOGIN:
            return state.get("user", action.user);
        
        case LOGOUT:
            return state.set('isUserLoggedIn', false).set("user", null);
        default:
            break;
    }
    return state;
}