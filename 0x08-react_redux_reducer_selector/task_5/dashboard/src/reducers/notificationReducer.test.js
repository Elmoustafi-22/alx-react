import { markAsAread, setNotificationFilter, fetchNotificationSucess } from "../actions/notificationActionCreators";
import { notificationReducer } from "../reducers/notificationReducer";
import {Map} from "immutable"

describe("tests for notification reducer", () => {
    const defaultState = {
        notifications: [],
        filter: "DEFAULT"
    }

    it("should return default state when no action is passed", () => {
      const myState = notificationReducer(undefined, {})
        expect(myState.toJS()).toEqual(defaultState);
    })

    it("should mark the correct notification as read", () => {
        const data = {
          filter: "DEFAULT",
          notifications: [
            {
              id: 1,
              isRead: false,
              type: "default",
              value: "New course available",
            },
            {
              id: 2,
              isRead: false,
              type: "urgent",
              value: "New resume available",
            },
            {
              id: 3,
              isRead: false,
              type: "urgent",
              value: "New data available",
            },
          ],
        };

        const output = {
          filter: "DEFAULT",
          notifications: [
            {
              id: 1,
              isRead: false,
              type: "default",
              value: "New course available",
            },
            {
              id: 2,
              isRead: true,
              type: "urgent",
              value: "New resume available",
            },
            {
              id: 3,
              isRead: false,
              type: "urgent",
              value: "New data available",
            },
          ],
        };
        const myState = notificationReducer(data, markAsAread(2))

        expect(myState.toJS()).toEqual(output)
    })

    it("should change filter", () => {
        const data = {
          filter: "DEFAULT",
          notifications: [
            {
              id: 1,
              isRead: false,
              type: "default",
              value: "New course available",
            },
            {
              id: 2,
              isRead: false,
              type: "urgent",
              value: "New resume available",
            },
            {
              id: 3,
              isRead: false,
              type: "urgent",
              value: "New data available",
            },
          ],
        };

        const output = {
          filter: "URGENT",
          notifications: [
            {
              id: 1,
              isRead: false,
              type: "default",
              value: "New course available",
            },
            {
              id: 2,
              isRead: false,
              type: "urgent",
              value: "New resume available",
            },
            {
              id: 3,
              isRead: false,
              type: "urgent",
              value: "New data available",
            },
          ],
        };
        const myState = notificationReducer(data, setNotificationFilter("URGENT"))

        expect(myState.toJS()).toEqual(output);
    })

    it ("should return correct state on successful fetch", () => {
        const data = {
          filter: "DEFAULT",
          noyifications: [
            {
              id: 1,
              isRead: false,
              type: "default",
              value: "New course available",
            },
            {
              id: 2,
              isRead: false,
              type: "urgent",
              value: "New resume available",
            },
            {
              id: 3,
              isRead: false,
              type: "urgent",
              value: "New data available",
            },
          ],
        };
        const myState = notificationReducer(data, fetchNotificationSucess());

        expect(myState.toJS()).toEqual(data);
    })
})