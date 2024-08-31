import {uiReducer, defaultState} from "./uiReducer";
import { selectCourse } from "../actions/courseActionCreators";
import { displayNotificationDrawer } from "../actions/uiActionCreators"
import { defaultState } from "./uiReducer";

describe("test for uiReducer", () => {
    it('Verifies initial state returned when no action is passed to uiReducer', () => {
        const myState = uiReducer(defaultState, '');
        expect(myState.toJS()).toEqual(defaultState.toJS())
    });

    it('Verifies the state equals the initial state when the action of select course is passed', () => {
        const myState = uiReducer(defaultState, selectCourse());
        expect(myState.toJS()).toEqual(defaultState.toJS())
    });

    it('Verifies isNotificationDrawerVisible is true when DISPLAY_NOTIFICATION_DRAWER is passed', () => {
        const myState = uiReducer(defaultState, displayNotificationDrawer());
        expect(myState.toJS().isNotificationDrawerVisible).toEqual(true);
    });
})