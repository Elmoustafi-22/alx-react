import { MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters } from "./notificationActionTypes";
import { markAsAread, setNotificationFilter } from "./notificationActionCreators";

describe("test action creators", () => {
    it("should create right action for mark as read", () => {
        expect(markAsAread(1)).toEqual({
          type: MARK_AS_READ,
          index: 1,
        });
    })

    it("should create right action for set notification filter", () => {
        expect(NotificationTypeFilters["DEFAULT"]).toEqual({
          type: SET_TYPE_FILTER,
          filter: "DEFAULT",
        });
    })
});