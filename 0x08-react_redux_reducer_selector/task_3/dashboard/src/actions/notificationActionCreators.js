import { MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters, FETCH_NOTIFICATIONS_SUCCESS } from "./notificationActionTypes";

export function markAsAread(index){
    return {
        type: MARK_AS_READ,
        index: index,
    }
}

export const boundMarkAsAread = (index) => dispatch(markAsAread(index));

export function setNotificationFilter(filter){
    return {
        type: SET_TYPE_FILTER,
        filter: filter,
    }
}

export const boundSetNotificationFilter = (filter) =>
  dispatch(setNotificationFilter(filter));

export function fetchNotificationSucess(){
    return {
      type: FETCH_NOTIFICATIONS_SUCCESS,
      data: [
        {
          id: 1,
          type: "default",
          value: "New course available",
        },
        {
          id: 2,
          type: "urgent",
          value: "New resume available",
        },
        {
          id: 3,
          type: "urgent",
          value: "New data available",
        },
      ],
    };
}

export const boundFetchNotificationSucess = () => dispatch(fetchNotificationSucess());