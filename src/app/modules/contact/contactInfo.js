import React, { useState, useEffect, useCallback } from "react";
import { Form, Input, Button, Row, Col, Radio, Checkbox } from "antd";
import _ from "lodash";
import axios from "axios";
import { isBlank } from "../../components/helpers/utils.js";
import '../../assets/css/contactUs.css';

const layout = {
  labelCol: { span: 4 },
  wrapperCol: { span: 15 },
  // colon: false,
  labelAlign: "left",
  scrollToFirstError: true,
  layout: "horizontal",
  size: "large"
};

/* eslint-disable no-template-curly-in-string */
const validateMessages = {
  required: "${label} 必填",
  types: {
    email: "${label} 格式有誤",
  },
};
/* eslint-enable no-template-curly-in-string */

const contact = (props) => {
  const postNotify = (data) => {
    // 組裝要傳送的訊息
    var msg = "\n==== [新留言] ====";
    Object.keys(data).forEach((key) => {
      let val = data[key] || "";
      if (isBlank(val)) val = "";
      switch (key) {
        case "name":
          msg = msg + "\n名稱: " + val;
          break;
        case "phone":
          msg = msg + "\n電話: " + val;
          break;
        case "email":
          msg = msg + "\n電子信箱: " + val;
          break;
        case "address":
          msg = msg + "\n聯絡地址: " + val;
          break;
        case "housingStatus":
          msg = msg + "\n房屋狀態: " + val;
          break;
        case "budgetRange":
          msg = msg + "\n預算: " + val;
          break;
        case "desc":
          msg = msg + "\n需求說明: " + val;
          break;
        default:
          break;
      }
    });
    var msg = msg + "\n==== [END] ====";
    data = {
      message: msg,
      stickerPackageId: "789",
      stickerId: "10855",
      token: "Bearer W06xfG8uS1SEjCmdRPbOFAFDcPfT97I4JXOcFaUrVxJ",
    };
    var formData = Object.keys(data)
      .map(function (keyName) {
        return (
          encodeURIComponent(keyName) + "=" + encodeURIComponent(data[keyName])
        );
      })
      .join("&");
    const url =
      "https://script.google.com/macros/s/AKfycbzJv-EoPpQJnZ1O9UQfeahayE82JF00jO28QEJxL6O-SuQ0XA7JI47eRdKe0dWKcYK4/exec";
    axios({
      method: "POST",
      timeout: 600000,
      redirect: "follow",
      withCredentials: false,
      url: `${url}`,
      data: formData,
    })
      .then((response) => {
        console.log("whttp response", response);
      })
      .catch((error) => {
        console.log("whttp error", error);
      });
  };
  const onFinish = (values) => {
    console.log(values.user);
    postNotify(values.user);
  };
  const googleMap =
    '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16484.188269497543!2d121.53934271146282!3d25.067470979094104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442abfa9e319e81%3A0x95ad11bb0a908643!2zMTA15Y-w54Gj5Y-w5YyX5biC5p2-5bGx5Y2A5rCR5peP5p2x6LevNjg56Jmf!5e0!3m2!1szh-TW!2sjp!4v1648604969813!5m2!1szh-TW!2sjp" width="80%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
  return (
    <div className="contact">
      <div className="title">
        <h1>聯絡我們</h1>
      </div>
      <Row>
        <Col span={12}>
          <div className="myMiniInfo">
            <div dangerouslySetInnerHTML={{ __html: googleMap }}></div>
          </div>
          <div className="myMiniInfoDetail">
            <p>維域設計室內裝修有限公司</p>
            <p>台中市北屯區文心路三段447號4F</p>
            <p>TEL: 0972078750</p>
          </div>
        </Col>
        <Col span={12}>
          <div className="contactForm">
            <Form
              {...layout}
              name="nest-messages"
              onFinish={onFinish}
              validateMessages={validateMessages}
            >
              <Form.Item
                name={["user", "name"]}
                label="姓名"
                rules={
                  [
                    { required: true }
                  ]
                }
              >
                <Input />
              </Form.Item>
              <Form.Item
                name={["user", "phone"]}
                label="電話"
                rules={
                  [
                    { required: true }
                  ]
                }
              >
                <Input />
              </Form.Item>
              <Form.Item name={["user", "time"]} label="聯絡時間" rules={[{ required: true }]}>
                <Checkbox.Group>
                  <Checkbox value='9-12'>09:00-12:00</Checkbox>
                  <Checkbox value='12-15'>12:00-15:00</Checkbox>
                  <Checkbox value='15-18'>15:00-18:00</Checkbox>
                  <Checkbox value='18-20'>18:00-21:00</Checkbox>
                </Checkbox.Group>
              </Form.Item>
              <Form.Item
                name={["user", "email"]}
                label="電子信箱"
                rules={[{ type: "email" }]}
              >
                <Input />
              </Form.Item>
              <Form.Item name={["user", "address"]} label="聯絡地址">
                <Input />
              </Form.Item>
              <Form.Item name={["user", "housingStatus"]} label="房屋狀態">
                <Radio.Group>
                  <Radio value="中古屋">中古屋</Radio>
                  <Radio value="預售屋">預售屋</Radio>
                  <Radio value="新成屋">新成屋</Radio>
                </Radio.Group>
              </Form.Item>
              <Form.Item name={["user", "budgetRange"]} label="預算範圍" extra="不包含傢俱家電">
                <Radio.Group>
                  <Radio value="100萬以內">100萬以內</Radio>
                  <Radio value="100萬-200萬">100萬-200萬</Radio>
                  <Radio value="200萬-300萬">200萬-300萬</Radio>
                  <Radio value="300萬-400萬">300萬-400萬</Radio>
                  <Radio value="500萬以上">500萬以上</Radio>
                </Radio.Group>
              </Form.Item>
              <Form.Item name={["user", "desc"]} label="需求說明">
                <Input.TextArea
                  placeholder="請輸入您的需求"
                  autoSize={{ minRows: 3, maxRows: 5 }}
                />
              </Form.Item>
              <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                <Button type="primary" htmlType="submit">
                  確認送出
                </Button>
              </Form.Item>
            </Form>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default contact;
