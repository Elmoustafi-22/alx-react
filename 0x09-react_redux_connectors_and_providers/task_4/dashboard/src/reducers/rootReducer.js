import courseReducer, { defaultCourseState } from "./courseReducer";
import notificationReducer, { defaultNotificationState } from  "./notificationReducer";
import uiReducer, { defaultUIState } from "./uiReducer";
import { Map } from "immutable";

export const defaultRootState = {
    courses: Map(defaultCourseState),
    notifictions: Map(defaultNotificationState),
    ui: Map(defaultUIState),
};

const rootReducer = {
    course: courseReducer,
    notifications: notificationReducer,
    ui: uiReducer,
};

export default rootReducer;