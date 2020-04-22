import React from 'react';
import { Link } from "react-router-dom";
import { HeaderDiv } from '@components/styleComponent';
import Menu from './menu';
import logoImage from 'asserts/pc-logo.png';

export default class Header extends React.Component {
  render() {
    return(
      <div>
        <HeaderDiv>
          <Link className="header-logo" to="/">
            <img src={logoImage} alt=""/>
            </Link>
          <Menu {...this.props} />
        </HeaderDiv>
      </div>
    );
  }
}