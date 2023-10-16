import React from "react";
import { Menu } from "antd";
import { UserOutlined } from "@ant-design/icons";

const Dashboard = () => {
  return (
    <>
      <Menu>
        <Menu.Item disabled className="h-50" icon={<UserOutlined />}>
          <span>EMPLOYEE<span>PAYROLL</span></span>
        </Menu.Item>
      </Menu>
    </>
  );
};

export default Dashboard;
