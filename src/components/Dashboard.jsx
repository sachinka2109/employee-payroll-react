import React, { useEffect, useState } from "react";
import { Menu, Table, Tag, Space, Button } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { deleteEmployee, getEmployee } from "../services/dataService";
import { useNavigate } from "react-router-dom";

const columns =  [
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
        <Button onClick={()=>handleDelete(record)}>Delete</Button>
      </Space>
    ),
  },
];


const handleDelete = async(record) => {
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
    navigate('/edit',{state: record})
  };
  useEffect(() => {
    fetchEmployee();
  }, []);
  console.log(data.data);
  return (
    <>
      <Menu>
        <Menu.Item disabled className="h-50" icon={<UserOutlined />}>
          <span>
            EMPLOYEE<span>PAYROLL</span>
          </span>
        </Menu.Item>
      </Menu>
      <div className="d-flex flex-column align-items-center">
        <Button onClick={() => navigate("/add")}>+ Add Employee</Button>
        <Table
          columns={columns}
          dataSource={data}
          scroll={{ x: true }}
          onRow={(record, rowIndex) => ({
            onClick: (e) => {
              const clickedCellClassName = e.target.className;
              const isActionsColumn = clickedCellClassName.includes("ant-table-cell-action");
              if (rowIndex !== -1 && !isActionsColumn) { // Check if it's not the last row
                handleEdit(record);
              }
            },
          })}
        />
      </div>
    </>
  );
};

export default Dashboard;
