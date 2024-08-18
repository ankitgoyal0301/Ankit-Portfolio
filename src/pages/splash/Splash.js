import React, { Component } from "react";
import "./Splash.css";
import { Redirect } from "react-router-dom";
import NameLogo from "../../assests/images/name-logo4.png";
import { greeting } from "../../portfolio.js";

function AnimatedSplash(props) {
  const theme = props.theme;
  return (
    <div className="logo_wrapper">
      <div className="screen" style={{ backgroundColor: props.theme.splashBg }}>
        <img src={NameLogo} className="name-logo" alt="Name Logo"/>
        <span className="name-text" style={{ color: "#FFFFFF" }}>
          {greeting.logo_name}
        </span>
      </div>
    </div>
  );
}

class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
    };
  }

  componentDidMount() {
    this.id = setTimeout(() => this.setState({ redirect: true }), 5500);
  }

  componentWillMount() {
    clearTimeout(this.id);
  }

  render() {
    return this.state.redirect ? (
      <Redirect to="/home" />
    ) : (
      <AnimatedSplash theme={this.props.theme} />
    );
  }
}

export default Splash;
