import { Form, Input, Button, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

interface LoginForm {
  username: string;
  password: string;
}

function Login() {
  const [form] = Form.useForm<LoginForm>();

  const onFinish = (values: LoginForm) => {
    message.success(`Login successful for ${values.username}`);
  };

  return (
    <div style={{ maxWidth: 400, margin: '50px auto', padding: 20 }}>
      <h2 style={{ textAlign: 'center', marginBottom: 24 }}>Login</h2>
      <Form
        form={form}
        name="login"
        onFinish={onFinish}
        autoComplete="off"
        layout="vertical"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input prefix={<UserOutlined />} placeholder="Username" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
        >
          <Input.Password prefix={<LockOutlined />} placeholder="Password" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Log in
          </Button>
        </Form.Item>

        <Form.Item>
          <a href="#" style={{ float: 'right' }}>Forgot password?</a>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Login;