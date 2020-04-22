import styled from "styled-components";
import { Menu, Button, Popover } from 'antd';

export const HeaderDiv = styled.div`
  padding: 0 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  & img {
    width: 100px;
    vertical-align: middle;
  }
  & .ant-menu {
    border-bottom: 1px solid transparent;
  }
`;

export const FooterDiv = styled.div`
  width: 100%;
  font-size: 12px;
  border-top: 1px solid #ddd;
  padding-top: 8px;
  margin: 8px auto;
  color: rgba(0, 0, 0, 0.5);
  width: 70%;
`;

export const PicPreviewDiv = styled.div`

`;

export const PicPreviewMask = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(0,0,0,0.65);
  height: 100%;
  z-index: 1000;
`

export const PicPreviewImgDiv = styled.div`
  z-index: 1000;
  position: fixed;
  overflow: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`
export const PicPreviewImg = styled.img`
  vertical-align: middle;
  align-items: center;
  max-width: 100%;
  max-height: 100%;
`;

export const IconDiv = styled.div`
  margin: 10px auto;
  z-index: 1001;
  position: fixed;
  overflow: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  text-align: right;
`;

export const MenuStyle = styled(Menu)`
  text-align: center;
  width:100%;
  border-top: 2px solid transparent;
`
export const LocalButtons = styled.div`
  display: flex;
`;

export const LocalButton = styled(Button)`
  float: left;
  margin-right: 5px;
  margin-top: 10px;
`;

export const IconLoading = styled.div`
  text-align: center;
  font-size: 40px;
`;

export const PopoverDiv = styled(Popover)`
  top: 18px;
  right: 25px;
  position: absolute;
  font-size: 24px;

`;