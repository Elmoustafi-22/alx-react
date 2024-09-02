import { 
  FETCH_NOTIFICATIONS_SUCCESS, 
  MARK_AS_READ, 
  NotificationTypeFilters, 
  SET_TYPE_FILTER,
  SET_LOADING_STATE, 
} from '../actions/notificationActionTypes';
import { Map } from "immutable";
import { notificationsNormalizer } from "../schema/notifications";

export const defaultNotificationState = Map({
    notifications: [],
    filter: "DEFAULT",
    loading: false,
});

export function notificationReducer(state = defaultNotificationState, action) {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS: {
      const normalizedData = notificationsNormalizer(action.data);

      Object.keys(normalizedData.notifications).map((key) => {
        normalizedData.notifications[key].isRead = false;
      });
      return state.mergeDeep(normalizedData);
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

    case SET_LOADING_STATE:
      return state.set("loading", action.loading);

    default:
      break
  }
  return state;
}