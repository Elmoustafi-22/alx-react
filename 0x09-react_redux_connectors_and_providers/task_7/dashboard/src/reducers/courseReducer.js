import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from "../actions/courseActionTypes";
import { Map } from 'immutable';
import { coursesNormalizer } from "../schema/courses";

export const defaultCourseState = Map([]);

export function courseReducer(state = defaultCourseState, action) {
  state = Map(state);
  switch (action.type) {
    case FETCH_COURSE_SUCCESS: {
      const data = action.data.map((item) => ({
        id: item.id,
        name: item.name,
        isSelected: false,
        credit: item.credit,
      }));
      const normalizedData = coursesNormalizer(data);
      return state.merge(normalizedData);
    }

    case SELECT_COURSE: {
      return state.setIn(
        ["entities", "courses", action.index.toString(), "isSelected"],
        true
      );
    }

    case UNSELECT_COURSE: {
      return state.setIn(
        ["entities", "courses", action.index.toString(), "isSelected"],
        false
      );
    }
    default:
      return state;
  }
}