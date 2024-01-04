import React from "react";
import { useAuth } from "context/auth-context";
import { Form, Input, Button } from "antd";

export const RegisterPage = () => {
  const { register } = useAuth();

  const handleSubmit = (data: { username: string; password: string }) => {
    register(data);
  };

  return (
    <Form onFinish={handleSubmit}>
      <Form.Item
        name={"username"}
        rules={[{ required: true, message: "请输入用户名" }]}
      >
        <Input placeholder={"用户名"} type="text" id={"username"} />
      </Form.Item>
      <Form.Item
        name={"password"}
        rules={[{ required: true, message: "请输入密码" }]}
      >
        <Input placeholder={"密码"} type="password" id={"password"} />
      </Form.Item>
      <Button htmlType={"submit"} type={"primary"}>
        注册
      </Button>
    </Form>
  );
};
