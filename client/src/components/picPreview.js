import React from "react";
import {
  PicPreviewMask,
  PicPreviewDiv,
  PicPreviewImg,
  PicPreviewImgDiv,
  IconDiv
} from "@components/styleComponent";
import { Icon } from 'antd';

export default class PicPreview extends React.Component {
  render() {
    const pic = this.props.pic || "";
    return (
      <PicPreviewDiv>
        <PicPreviewMask />
        <IconDiv>
          <Icon type="fullscreen-exit" style={{ fontSize: '40px', color: '#FBFBFB' }} onClick={() => { this.props.close(); }}/>
        </IconDiv>
        <PicPreviewImgDiv>
          <PicPreviewImg src={pic} />
        </PicPreviewImgDiv>
      </PicPreviewDiv>
    );
  }
}
