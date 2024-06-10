import React from "react";
import { shallow } from "enzyme";
import CourseListRow from "./CourseListRow";

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});
afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe("CourseListRow component tests", () => {
  it("renders one cell with colspan = 2 when textSecondCell does not exist and isHeader is true", () => {
    const wrapper = shallow(
      <CourseListRow isHeader={true} textFirstCell="Header" />
    );
    expect(wrapper.find("tr").prop("style")).toHaveProperty(
      "backgroundColor",
      "#f5f5f5ab"
    );
    expect(wrapper.find("th").length).toBe(1);
    expect(wrapper.find("th").prop("colSpan")).toBe(2);
  });

  it("renders two cells when textSecondCell is present and isHeader is true", () => {
    const wrapper = shallow(
      <CourseListRow
        isHeader={true}
        textFirstCell="Header1"
        textSecondCell="Header2"
      />
    );
    expect(wrapper.find("tr").prop("style")).toHaveProperty(
      "backgroundColor",
      "#f5f5f5ab"
    );
    expect(wrapper.find("th").length).toBe(2);
    expect(wrapper.find("th").at(0).text()).toBe("Header1");
    expect(wrapper.find("th").at(1).text()).toBe("Header2");
  });

  it("renders two td elements within a tr element when isHeader is false", () => {
    const wrapper = shallow(
      <CourseListRow textFirstCell="Cell1" textSecondCell="Cell2" />
    );
    expect(wrapper.find("tr").prop("style")).toHaveProperty(
      "backgroundColor",
      "#f5f5f5ab"
    );
    expect(wrapper.find("td").length).toBe(2);
    expect(wrapper.find("td").at(0).text()).toBe("Cell1");
    expect(wrapper.find("td").at(1).text()).toBe("Cell2");
  });
});
