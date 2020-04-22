import React from "react";
import axios from "axios";
import { Icon, message } from 'antd';
import PicWaterFall from "@components/picWaterFall";
import { IconLoading } from '@components/styleComponent'
import { invokeMasonry } from './../const';

export default function withWrappedComponent(type) {
  return class PicShow extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        pic: [],
        loading: true
      };
    }
    
  
    componentDidMount() {
      this.getPictureFormServer();
    }
  
    getPictureFormServer = () => {
      axios.get(`http://localhost:3000/api/v1/${type}`).then(response => {
        this.setState({
          pic: response.data || [],
          loading: false
        }, () => {
          invokeMasonry();
        });
      }, err => {
        message.error(err.toString());
        this.setState({
          pic: [],
          loading: false
        });
      });
    }
  
    render() {
      return (
        <div>
          {this.state.loading ? (
            <IconLoading><Icon type="loading" /></IconLoading>
          ) : (
            <PicWaterFall pictures={this.state.pic} />
          )}
        </div>
      );
    }
  }
}
