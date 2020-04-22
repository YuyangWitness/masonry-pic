import React from "react";
import { FormattedMessage } from "react-intl";
import { Menu, Icon } from "antd";
import { Link } from "react-router-dom";

import {
  MenuStyle,
  LocalButton,
  LocalButtons,
  PopoverDiv
} from "@components/styleComponent";

export default class MenuItem extends React.Component {
  constructor(props) {
    super(props);
    const pathname = window.location.pathname;
    this.state = {
      navChange: false,
      current: pathname == null || pathname === "/" ? "/plan" : window.location.pathname
    };
  }

  changeMenuKey = key => {
    this.setState({
      current: key || ""
    });
  };

  componentWillMount() {
    this.initMenu();
    window.onpopstate = e => {
      this.changeMenuKey(e.key || "");
    };
    window.onresize = () => {
      this.setCurrentMenu();
    };
  }

  initMenu = () => {
    const dWidth = document.body.clientWidth;
    if(dWidth < 768) {
      this.setState({
        navChange: true,
        mode: "vertical",
        currentWidth: dWidth
      });
    } else {
      this.setState({
        navChange: false,
        mode: "horizontal",
        currentWidth: dWidth
      });
    }
  }

  setCurrentMenu = () => {
    const currentWidth = this.state.currentWidth;
    const dWidth = document.body.clientWidth;
    if (currentWidth >= 768 && dWidth < 768) {
      this.setState({
        navChange: true,
        mode: "vertical",
        currentWidth: dWidth
      });
    } else if (currentWidth < 768 && dWidth >= 768) {
      this.setState({
        navChange: false,
        mode: "horizontal",
        currentWidth: dWidth
      });
    }
  };

  render() {
    const { navChange, mode, current } = this.state;
    const { locale } = this.props;
    const MenuJSX = (
      <MenuStyle
        onClick={e => this.changeMenuKey(e.key || "")}
        selectedKeys={[current]}
        mode={mode}
        id="nav"
      >
        <Menu.Item key="/plan">
          <Icon type="ant-design" />
          <Link to="/plan" style={{ display: "inline" }}>
            <FormattedMessage id="app.menu1" />
          </Link>
        </Menu.Item>
        <Menu.Item key="/media">
          <Icon type="rocket" />
          <Link to="/media" style={{ display: "inline" }}>
            <FormattedMessage id="app.menu2" />
          </Link>
        </Menu.Item>
        <Menu.Item key="/video">
          <Icon type="video-camera" />
          <Link to="/video" style={{ display: "inline" }}>
            <FormattedMessage id="app.menu3" />
          </Link>
        </Menu.Item>
        <Menu.Item key="/about">
          <Icon type="team" />
          <Link to="/about" style={{ display: "inline" }}>
            <FormattedMessage id="app.menu4" />
          </Link>
        </Menu.Item>
      </MenuStyle>
    );
    const LocalButtonDiv = (
      <LocalButtons>
        <LocalButton
          type={locale === "zh" ? "primary" : "default"}
          onClick={() => {
            this.props.changeLocal("zh");
          }}
        >
          中文
        </LocalButton>
        <LocalButton
          type={locale === "en" ? "primary" : "default"}
          onClick={() => {
            this.props.changeLocal("en");
          }}
        >
          English
        </LocalButton>
      </LocalButtons>
    );
    return (
      <div>
        {navChange ? (
          <PopoverDiv
            placement="bottom"
            trigger="click"
            content={
              <React.Fragment>
                {MenuJSX}
                {LocalButtonDiv}
              </React.Fragment>
            }
          >
            <Icon type="align-left" />
          </PopoverDiv>
        ) : (
          <div className="menu">
            {MenuJSX}
            {LocalButtonDiv}
          </div>
        )}
      </div>
    );
  }
}
