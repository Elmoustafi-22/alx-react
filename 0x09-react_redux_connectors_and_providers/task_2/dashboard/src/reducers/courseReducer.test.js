import { courseReducer } from "./courseReducer";
import { fetchCourseSuccess, selectCourse, unSelectCourse } from "../actions/courseActionCreators";
import { fromJS, Map } from "immutable";
import { coursesNormalizer } from "../schema/courses";

describe("tests for course Reducer", () => {
    const defaultState = [];
    const data = [
      {
        id: 1,
        name: "ES6",
        credit: 60,
      },
      {
        id: 2,
        name: "Webpack",
        credit: 20,
      },
      {
        id: 3,
        name: "React",
        credit: 40,
      },
    ];

    it("should return an empty array if no action was passed", () => {
        const myState = courseReducer([], '');
        expect(myState).toEqual(Map([]));
    });

    it("should return a correct data on successful fetch", () => {
        const data = [
          {
            id: 1,
            name: "ES6",
            credit: 60,
          },
          {
            id: 2,
            name: "Webpack",
            credit: 20,
          },
          {
            id: 3,
            name: "React",
            credit: 40,
          },
        ];

        const myState = courseReducer([], fetchCourseSuccess());
        
        expect(myState.toJS()).toEqual(coursesNormalizer(data));
    })

    it("should return data with the right item selected", () => {
        const data = [
          {
            id: 1,
            name: "ES6",
            isSelected: false,
            credit: 60,
          },
          {
            id: 2,
            name: "Webpack",
            isSelected: false,
            credit: 20,
          },
          {
            id: 3,
            name: "React",
            isSelected: false,
            credit: 40,
          },
        ];

        const selected = [
          {
            id: 1,
            name: "ES6",
            isSelected: false,
            credit: 60,
          },
          {
            id: 2,
            name: "Webpack",
            isSelected: true,
            credit: 20,
          },
          {
            id: 3,
            name: "React",
            isSelected: false,
            credit: 40,
          },
        ];
        const myState = courseReducer(fromJS(coursesNormalizer(data)), selectCourse(2));

        expect(myState.toJS()).toEqual(coursesNormalizer(selected))
    })

    it("should return data with the right items unselected", () => {
        const data = [
          {
            id: 1,
            name: "ES6",
            isSelected: false,
            credit: 60,
          },
          {
            id: 2,
            name: "Webpack",
            isSelected: true,
            credit: 20,
          },
          {
            id: 3,
            name: "React",
            isSelected: false,
            credit: 40,
          },
        ];

        const unSelected = [
          {
            id: 1,
            name: "ES6",
            isSelected: false,
            credit: 60,
          },
          {
            id: 2,
            name: "Webpack",
            isSelected: false,
            credit: 20,
          },
          {
            id: 3,
            name: "React",
            isSelected: false,
            credit: 40,
          },
        ];

        const myState = courseReducer(
          fromJS(coursesNormalizer(data)),
          unSelectCourse(2)
        );

        expect(myState.toJS()).toEqual(coursesNormalizer(selected));
    })
})