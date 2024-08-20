import { LOGIN, LOGOUT, DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER } from "./uiActionTypes";
import { login, logout, hideNotificationDrawer, displayNotificationDrawer } from "./uiActionCreators";

describe("tests for UI notifications", () => {
    it("should create a proper login", () => {
        const email = "email@example.com";
        const password = "password123";

        expect(login(email, password)).toEqual({
            type: LOGIN,
            user: {
                email: "email@example.com",
                password: "password123",
            },
        });
    });

    it("should create a proper logout", () => {
        expect(logout()).toEqual({
            type: LOGOUT,
        });
    });

    it("should create a proper display notification drawer", () => {
        expect(displayNotificationDrawer()).toEqual({
            type: DISPLAY_NOTIFICATION_DRAWER,
        });
    })

    it("should create a proper hide notification drawer", () => {
        expect(hideNotificationDrawer()).toEqual({
            type: HIDE_NOTIFICATION_DRAWER,
        });
    });
});