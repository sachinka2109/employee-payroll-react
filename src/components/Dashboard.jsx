import React, { useEffect, useState } from "react";
import { Menu, Table, Tag, Space, Button, Typography } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { deleteEmployee, getEmployee } from "../services/dataService";
import { useNavigate } from "react-router-dom";

const columns = [
  {
    title: "#",
    dataIndex: "id",
    key: "id",
    align: "center",
  },
  {
    title: "",
    dataIndex: "profileimg",
    key: "profileimg",
    align: "center",
    render: (_, { profileimg }) => (
      <>
        <img src={profileimg} alt="" srcset="" />
      </>
    ),
  },
  {
    title: "Name",
    key: "name",
    align: "center",
    render: (_, record) => (
      <Space size="middle">
        <div>{record.name}</div>
      </Space>
    ),
  },
  {
    title: "Gender",
    dataIndex: "gender",
    key: "gender",
    align: "center",
  },
  {
    title: "Department",
    dataIndex: "department",
    key: "department",
    align: "center",
    render: (_, { department }) => (
      <>
        {department.map((tag) => {
          let color = "green";
          // if (tag === 'loser') {
          //   color = 'volcano';
          // }
          return <Tag color={color}>{tag.toUpperCase()}</Tag>;
        })}
      </>
    ),
  },
  {
    title: "Salary",
    dataIndex: "salary",
    key: "salary",
    align: "center",
    render: (_, { salary }) => <div>Rs. {salary}</div>,
  },
  {
    title: "StartDate",
    dataIndex: "date",
    key: "date",
    align: "center",
  },
  {
    title: "Actions",
    key: "action",
    align: "center",
    render: (_, record) => (
      <Space size="middle">
        <Button onClick={() => handleDelete(record)}>Delete</Button>
      </Space>
    ),
  },
];

const handleDelete = async (record) => {
  await deleteEmployee(record.id);
};

const Dashboard = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const fetchEmployee = async () => {
    const res = await getEmployee();
    setData(res.data);
  };
  const handleEdit = (record) => {
    navigate("/edit", { state: record });
  };
  useEffect(() => {
    fetchEmployee();
  }, []);
  console.log(data.data);
  return (
    <>
      <Menu className="bg-primary">
        <Menu.Item
          className="h-50 fs-6 fw-bold"
          style={{ width: "230px" }}
          icon={<UserOutlined />}
        >
          <span className="text-success text-wrap">
            EMPLOYEE<span className="text-secondary">PAYROLL</span>
          </span>
        </Menu.Item>
      </Menu>
      <div className="d-flex flex-column align-items-center my-5 mx-auto">
        <div style={{ width: "1000px" }}>
          <div className="d-flex align-items-center justify-content-between">
            <Typography.Title level={2} style={{ margin: 0 }}>
              Employee Details
            </Typography.Title>
            <Button
              type="primary"
              style={{ backgroundColor: "green" }}
              onClick={() => navigate("/add")}
            >
              + Add Employee
            </Button>
          </div>
          <Table
            columns={columns}
            scroll={{ x: true }}
            dataSource={data}
          />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
