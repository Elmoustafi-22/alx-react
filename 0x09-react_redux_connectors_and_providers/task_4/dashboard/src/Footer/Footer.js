import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types"
import "./Footer.css";
import { getFullYear, getFooterCopy } from "../utils/utils";

function Footer({ user }) {
  return (
    <>
      <div className="App-footer">
        {user && (
          <p>
            <a href="#">Contact us</a>
          </p>
        )}
        <p>
          Copyright {getFullYear()} - {getFooterCopy(true)}
        </p>
      </div>
    </>
  );
}

Footer.defaultProps = {
  user: null,
}

Footer.propTypes = {
  user: PropTypes.object,
}

const mapStateToProps = (state) => {
  return {
    user: state.get("user")
  }
}
export default connect(mapStateToProps, null)(Footer);
