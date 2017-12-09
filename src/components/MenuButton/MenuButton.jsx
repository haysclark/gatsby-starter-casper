import React, { Component } from "react";
import "./MenuButton.css";

class MenuButton extends Component {
  render() {
    const { navigation, onClick } = this.props;
    if (navigation && onClick) {
      return (
        <a className="menu-button icon-menu" href="#menu" onClick={onClick}>
          <span className="word">Menu</span>
        </a>
      );
    }
    return null;
  }
}

export default MenuButton;
