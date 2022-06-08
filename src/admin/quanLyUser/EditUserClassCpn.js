import React, { Component } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { connect } from "react-redux";

class EditUserClassCpn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // userEditing: "tai khoan day",
    };
  }

  onFinish = (values) => {
    console.log("Success:", values);
  };

  onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  UNSAFE_componentWillMount() {
    console.log("Component WILL MOUNT!");
  }
  //
  render() {
    //     console.log(this.state.taiKhoan);
    const { userEditing, dispatch } = this.props;
    console.log(dispatch);
    return (
      <div>
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
            username: userEditing.taiKhoan,
          }}
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userEditing: state.QuanLyNguoiDungReducer.userEditing,
  };
};
export default connect(mapStateToProps, null)(EditUserClassCpn);
