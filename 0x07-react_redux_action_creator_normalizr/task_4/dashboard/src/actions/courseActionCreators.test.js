import { selectCourse, unSelectCourse } from "./courseActionCreators";
import { SELECT_COURSE, UNSELECT_COURSE } from "./courseActionTypes";

describe("test for action creators", () => {
    it("should return right action payload and type when selected", () => {
        expect(selectCourse(1)).toEqual({ type: SELECT_COURSE, index: 1 });
    });
    it("should return right action payload and type when selected", () => {
        expect(unSelectCourse(1)).toEqual({ type: UNSELECT_COURSE, index: 1 });
    });
})