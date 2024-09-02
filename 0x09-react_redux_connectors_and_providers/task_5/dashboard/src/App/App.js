import React from "react";
import {connect} from "react-redux"
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Login from "../Login/Login";
import CourseList from "../CourseList/CourseList";
import Notifications from "../Notifications/Notifications";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom";
import BodySection from "../BodySection/BodySection";
import { StyleSheet, css } from "aphrodite";
import PropTypes from "prop-types";
import { getLatestNotification } from "../utils/utils";
import { AppContext, user } from "./AppContext";
import { displayNotificationDrawer, hideNotificationDrawer, login, loginRequest, logout } from "../actions/uiActionCreators";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: user,
    };

    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.markNotificationAsRead = this.markNotificationAsRead.bind(this);
  }

  listCourses = [
    { id: 1, name: "ES6", credit: 60 },
    { id: 2, name: "Webpack", credit: 20 },
    { id: 3, name: "React", credit: 40 },
  ];

  handleKeyPress(e) {
    if (e.ctrlKey && e.key === "h") {
      e.preventDefault();
      alert("Logging you out");
      this.props.logout();
    }
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }

  logIn(email, password) {
    this.setState({
      user: {
        email,
        password,
        isLoggedIn: true,
      },
    });
  }

  logOut() {
    this.setState({ user });
  }


  render() {
    const { user, listNotifications } = this.state;

    const {
      isLoggedIn,
      displayDrawer,
      displayNotificationDrawer,
      hideNotificationDrawer,
      login,
      logout
    } = this.props;

    return (
      <React.Fragment>
        <div className={css(styles.App)}>
          <div className="heading-section">
            <Notifications
              markNotificationAsRead={this.markNotificationAsRead}
              listNotifications={listNotifications}
              displayDrawer={displayDrawer}
              handleDisplayDrawer={displayNotificationDrawer}
              handleHideDrawer={hideNotificationDrawer}
            />
            <Header />
          </div>
          {!isLoggedIn ? (
            <BodySectionWithMarginBottom title="Log in to continue">
              <Login logIn={login} />
            </BodySectionWithMarginBottom>
          ) : (
            <BodySectionWithMarginBottom title="Course list">
              <CourseList listCourses={this.listCourses} />
            </BodySectionWithMarginBottom>
          )}
          <BodySection title="News from the school">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis at tempora odio, necessitatibus repudiandae
              reiciendis cum nemo sed asperiores ut molestiae eaque aliquam illo
              ipsa iste vero dolor voluptates.
            </p>
          </BodySection>
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  App: {
    height: "100vh",
    maxWidth: "100vw",
    position: "relative",
    fontFamily: "Arial, Helvetica, sans-serif",
  },
});

App.defaultProps = {
  isLoggedIn: false,
  displayDrawer: false,
  displayNotificationDrawer: () => {},
  hideNotificationDrawer: () => {},
  login: () => {},
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  displayDrawer: PropTypes.bool,
  displayNotificationDrawer: PropTypes.func,
  hideNotificationDrawer: PropTypes.func,
  login: PropTypes.func,
};

export const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.get("isUserLoggedIn"),
    displayDrawer: state.get("isNotificationDrawerVisible"),
  };
};

export const mapDispatchToProps = {
  displayNotificationDrawer,
  hideNotificationDrawer,
  login: loginRequest,
  logout,
};
// export default App;
export default connect(mapStateToProps, mapDispatchToProps)(App)