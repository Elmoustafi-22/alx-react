import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, NotificationTypeFilters, SET_TYPE_FILTER } from '../actions/notificationActionTypes';
import { Map } from "immutable";
import { notificationsNormalizer } from "../schema/notifications";

export const defaultState = Map({
    notifications: [],
    filter: "DEFAULT",
});

export function notificationReducer(state = defaultState, action) {
    switch (action.type) {
        case FETCH_NOTIFICATIONS_SUCCESS: {
            const notificationData = action.data.map((item) => ({
                id: item.id,
                type: item.type,
                value: item.value,
                isRead: false,
            }))

            return state.merge({
                filter: NotificationTypeFilters.DEFAULT,
                notifications: notificationsNormalizer(notificationData),
            })
        }

        case MARK_AS_READ: {
            return Map(state).setIn(
              [
                "notifications",
                "entities",
                "notifications",
                action.index.toString(),
                "isRead",
              ],
              true
            );
        }

        case SET_TYPE_FILTER:
            return Map(state).setIn("filter", action.filter);
        
        default:
            return state;
    }
}