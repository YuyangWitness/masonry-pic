import React from "react";
import { IntlProvider } from 'react-intl';
import zh_CN from "./locales/zh-CN.js";
import en_US from "./locales/en-US";
import App from './App';

class Main extends React.Component {
  state = {
    locale: 'zh'
  }
  changeLocal = type => {
    this.setState({
      locale: type
    });
  }
  messageType = type => {
    if(type === 'en') {
      return en_US;
    } else if(type === 'zh') {
      return zh_CN;
    }
  }
  render() {
    const locale = this.state.locale || 'zh';
    return (      
    <IntlProvider locale={locale} messages={this.messageType(locale)}>
      <App changeLocal={this.changeLocal} locale={locale} />
    </IntlProvider>
    );
  }
}

export default Main;
