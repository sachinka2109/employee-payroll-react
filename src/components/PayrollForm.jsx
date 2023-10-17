import {
  Checkbox,
  Form,
  Input,
  Radio,
  DatePicker,
  Select,
  Flex,
  Row,
  Button,
  Col,
} from "antd";
import React,{useState} from "react";
import { useNavigate,useLocation } from "react-router-dom";
import { addEmployee, updateEmployee } from "../services/dataService";
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';

const PayrollForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { state,pathname } = location;
  const options = [
    { label: "HR", value: "HR" },
    { label: "Sales", value: "Sales" },
    { label: "Finance", value: "Finance" },
    { label: "Engineer", value: "Engineer" },
    { label: "Others", value: "Others" },
  ];
  const salaryOptions = [
    { label: "35000", value: "35000" },
    { label: "40000", value: "40000" },
    { label: "45000", value: "45000" },
    { label: "50000", value: "50000" },
  ];
  // const labelColStyle = { span: 6,width:10 }; // Adjust the span to control the label width
  const wrapperColStyle = { span: 18, offset: 2 }; // Adjust the span to control the field width
  const [data,setData] = useState(
    {
      name:state?.name || "",
      profileimg:state?.profileimg || "",
      gender:state?.gender || "",
      department: state?.department || [],
      salary: state?.salary || "",
      date:state?.date  || "2020/09/21",
      note:state?.note || ""
    }
  );

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name] : e.target.value
    })
  } 

  const handleSubmit = async() => {
    if(pathname.includes('edit')) {
      await updateEmployee(state.id,data);
      return navigate('/');
    }
    const res = await addEmployee(data);
    handleReset();
  }

  const handleReset = () => {
    setData({
      name:'',
      profileimg:'',
      gender:'',
      department: [],
      salary: "35000",
      date:"",
      note:""
    })
  }
  return (
    <Row>
      <Form className="mx-auto my-5 shadow-lg p-5">
        <Col>
          <h5>Employee Payroll Form</h5>
        </Col>
        <Col span={24}>
          <Form.Item
            // wrapperCol={wrapperColStyle}
            label="name"
            rules={[
              {
                required: true,
                message: "Please input Employee name!",
              },
            ]}
          >
            <Input name="name" value={data.name} onChange={handleChange}/>
          </Form.Item>
        </Col>
        <Col span={24}>
          <Form.Item
            // wrapperCol={wrapperColStyle}
            label="Profile Image"
            rules={[
              {
                required: true,
                message: "Please input Employee name!",
              },
            ]}
          >
            <Radio.Group name="profileimg" defaultValue={data.profileimg} onChange={handleChange}>
              <Radio value={"https://i.pravatar.cc/35?img=1"}>
                <img src="https://i.pravatar.cc/35?img=1" alt="" />
              </Radio>
              <Radio value={"https://i.pravatar.cc/35?img=8"}>
                <img src="https://i.pravatar.cc/35?img=8" alt="" />
              </Radio>
              <Radio value={"https://i.pravatar.cc/35?img=5"}>
                <img src="https://i.pravatar.cc/35?img=5" alt="" />
              </Radio>
              <Radio value={"https://i.pravatar.cc/35?img=11"}>
                <img src="https://i.pravatar.cc/35?img=11" alt="" />
              </Radio>
            </Radio.Group>
          </Form.Item>
        </Col>
        <Col span={24}>
          <Form.Item
            // wrapperCol={wrapperColStyle}
            label="Gender"
            rules={[
              {
                required: true,
                message: "Please input Employee name!",
              },
            ]}
          >
            <Radio.Group name="gender" value={data.gender} onChange={handleChange}>
              <Radio value="male">Male</Radio>
              <Radio value="female">Female</Radio>
            </Radio.Group>
          </Form.Item>
        </Col>
        <Col span={24}>
          <Form.Item
            // wrapperCol={wrapperColStyle}
            label="Department"
            rules={[
              {
                required: true,
                message: "Please input Employee name!",
              },
            ]}
          >
            <Checkbox.Group value={data.department} onChange={(checkedvalue)=> setData({...data,department:checkedvalue})} options={options} />
          </Form.Item>
        </Col>
        <Col span={24}>
          <Form.Item
            // wrapperCol={wrapperColStyle}
            label="Salary"
            name="salary"
            rules={[
              {
                required: true,
                message: "Please input Employee name!",
              },
            ]}
          >
            <Select
              defaultValue={data.salary}
              style={{ width: 120 }}
              onChange={(checkedvalue)=> setData({...data,salary:checkedvalue})}
              options={salaryOptions}
            />
          </Form.Item>
        </Col>
        <Col span={24}>
          <Form.Item
            // wrapperCol={wrapperColStyle}
            label="Date"
            name="date"
            rules={[
              {
                required: true,
                message: "Please input Employee name!",
              },
            ]}
          >
            <DatePicker format={"YYYY/MM/DD"} defaultValue={dayjs(data.date,"YYYY/MM/DD")} onChange={(value)=> setData({ ...data, date: value.format("YYYY/MM/DD")})}/>
          </Form.Item>
        </Col>
        <Col span={24}>
          <Form.Item
            // wrapperCol={wrapperColStyle}
            label="notes"
            rules={[
              {
                required: true,
                message: "Please input Employee name!",
              },
            ]}
          >
            <Input.TextArea name="note" value={data.note} onChange={handleChange} rows={4} />
          </Form.Item>
        </Col>
        <Row>
          <Col span={12}>
            <Button onClick={()=>{return navigate('/')}}>Cancel</Button>
          </Col>
          <Col span={12} className="d-flex justify-content-evenly">
            <Button onClick={handleSubmit}>Submit</Button>
            <Button onClick={handleReset}>Reset</Button>
          </Col>
        </Row>
      </Form>
    </Row>
  );
};

export default PayrollForm;
