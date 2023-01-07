import React from "react";
import _ from 'lodash'
import {
  FacebookOutlined,
  InstagramOutlined,
  PhoneOutlined,
  MailOutlined,
  MessageOutlined,
} from "@ant-design/icons";
import { Space, Button } from "antd";
// import line_icon from "../../assets/images/icon/icons8-line-48.png";
// import logo from "../../assets/images/logo/website/LOGO去背1.png";

export default () => {
  return (
    <div id="footer" className="footer">
      {/* <div className="info">
        <h4>維域設計室內裝修有限公司</h4>
        <p>地址：台中市北屯區文心路三段447號4F</p>
        <p>手機：0972-078-750</p>
        <p>電子信箱：Wei.Yu.Design22@gmail.com</p>
      </div> */}
      {/* <div className="messageIcon">
        <Space>
          <a
            role="button"
            href="https://www.facebook.com/wei.yu.design22"
            target="_blank"
          >
            <FacebookOutlined style={{ fontSize: "30px" }} />
          </a>
          <a
            role="button"
            href="http://instagram.com/wei.yu.design22"
            target="_blank"
          >
            <InstagramOutlined style={{ fontSize: "30px" }} />
          </a>
          <a 
            role="button" 
            href="https://line.me/ti/p/4mBzKaqaTB"
            target="_blank"
          >
            <MessageOutlined style={{ fontSize: "30px" }} />
          </a>
          <a role="button" href="tel:+886-972078750">
            <PhoneOutlined style={{ fontSize: "30px" }} />
          </a>
          <a role="button" href="mailto:wei.yu.design22@gmail.com">
            <MailOutlined style={{ fontSize: "30px" }} />
          </a>
        </Space>
      </div> */}
      <div className="text">COPYRIGHT © 2022 WEIYU DESIGN</div>
    </div>
  )
};
