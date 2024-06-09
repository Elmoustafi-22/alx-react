import React from "react";
import PropTypes from "prop-types";


const CourseListRow= ({ isHeader, textFirstCell, textSecondCell }) => {

  const rowBgColor = {
    backgroundColor: "#f5f5f5ab",
  };

  const headerRowBgColor = {
    backgroundColor: "#deb5b545",
  };
  return (
    <tr style={rowBgColor}>
      {isHeader ? (
        textSecondCell == null ? 
          (<th style={headerRowBgColor} colSpan={2}>{textFirstCell}</th>) :
            (
              <>
                <th style={headerRowBgColor}>{textFirstCell}</th>
                <th style={headerRowBgColor}>{textSecondCell}</th>
              </>
            )
            ) : (
              <>
                <td>{textFirstCell}</td>
                <td>{textSecondCell}</td>
              </>
            )
      }
    </tr>
  );
}

CourseListRow.propTypes = {
    isHeader: PropTypes.bool,
    textFirstCell: PropTypes.string.isRequired,
    textSecondCell: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CourseListRow.defaultProps = {
    isHeader: false,
    textSecondCell: null,
};

export default CourseListRow;