import React  from "react";
import './CourseList.css';
import CourseListRow from "./CourseListRow";
import CourseShape from "./CourseShape";
import PropTypes from "prop-types";

const CourseList = ({ listCourses }) => {
    return(
        <table id="CourseList">
            <thead>
                <CourseListRow textFirstCell="Available courses" isHeader={true}/>
                <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />
            </thead>
            <tbody>
                {listCourses.length > 0 ? (
                    listCourses.map(({id, name, credit}) => {
                        <CourseListRow key={id} textFirstCell={name} textSecondCell={credit} />
                    })) : (
                        <CourseListRow textFirstCell="No course available yet" />
                    )
                }
                <CourseListRow textFirstCell="ES6" textSecondCell="60" isHeader={false} />
                <CourseListRow textFirstCell="Webpack" textSecondCell="20" isHeader={false} />
                <CourseListRow textFirstCell="React" textSecondCell="40" isHeader={false} />
            </tbody>

        </table>
    )
}

CourseList.propTypes = {
    listCourses: PropTypes.arrayOf(CourseShape),
}

CourseList.defaultProps = {
    listCourses: [],
}

export default CourseList;