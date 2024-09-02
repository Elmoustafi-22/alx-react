import uiReducer, { defaultUIState } from "./uiReducer";
import { SELECT_COURSE } from "../actions/courseActionTypes"
import { LOGIN, DISPLAY_NOTIFICATION_DRAWER } from "../actions/uiActionTypes";

const USER = { email: "muadmun@gmail.com", password: "muadmun" };

describe('uiReducer tests', () => {
    it('verifies the state returned by the uiReducer function is the sames as the default state when no action is passed', () => {
        const state = uiReducer(undefined, {});

        expect(state.toJS()).toEqual(defaultUIState);
    });

    it("verifies the state returned by the uiReducer function equals the initial state when the action SELECT_COURSE is passed", () => {
      const state = uiReducer(undefined, { type: SELECT_COURSE });

      expect(state.toJS()).toEqual(defaultUIState);
    });

    it("verifies the state returned by the uiReducer function, when the action DISPLAY_NOTIFICATION_DRAWER is passed, changes correctly the isNotificationDrawerVisible property", () => {
      const state = uiReducer(undefined, { type: DISPLAY_NOTIFICATION_DRAWER });

      expect(state.toJS()).toEqual({
        ...defaultUIState,
        isNotificationDrawerVisible: true,
      });
    });

    it("verifies the state returned by the uiReducer function, when the action LOGIN is passed, changes correctly the user property", function () {
      const state = uiReducer(undefined, { type: LOGIN, user: USER });

      expect(state.toJS()).toEqual({
        ...initialUIState,
        user: USER,
      });
    });
})