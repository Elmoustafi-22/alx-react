import { courseReducer } from "./courseReducer";
import { fetchCourseSuccess, selectCourse, unSelectCourse } from "../actions/courseActionCreators";

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
        expect(courseReducer(defaultState, 'null')).toEqual([]);
    })

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

        expect(courseReducer(data, fetchCourseSuccess())).toEqual(
            data.map((course) => ({
                ...course,
                isSelected: false,
            })))
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

        expect(courseReducer(data, selectCourse(2))).toEqual(selected)
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

        expect(courseReducer(data, unSelectCourse(2))).toEqual(unSelected);
    })
})