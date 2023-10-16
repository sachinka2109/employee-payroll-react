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
import React from "react";

const PayrollForm = () => {
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
//   const labelColStyle = { span: 6,width:10 }; // Adjust the span to control the label width
//   const wrapperColStyle = { span: 18 }; // Adjust the span to control the field width
  return (
    <Flex justify="center">
      <Form className="w-50 my-5 shadow-lg p-5">
        <Row
          gutter={{
            xs: 8,
            sm: 16,
            md: 24,
            lg: 32,
          }}
        >
          <Col><h5>Employee Payroll Form</h5></Col>
          <Col span={24}>
            <Form.Item
              label="name"
              name="name"
              rules={[
                {
                  required: true,
                  message: "Please input Employee name!",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item
              label="Profile Image"
              name="image"
              rules={[
                {
                  required: true,
                  message: "Please input Employee name!",
                },
              ]}
            >
              <Radio.Group>
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
              label="Gender"
              name="gender"
              rules={[
                {
                  required: true,
                  message: "Please input Employee name!",
                },
              ]}
            >
              <Radio.Group>
                <Radio value={1}>Male</Radio>
                <Radio value={2}>Female</Radio>
              </Radio.Group>
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item
              label="Department"
              name="department"
              rules={[
                {
                  required: true,
                  message: "Please input Employee name!",
                },
              ]}
            >
              <Checkbox.Group options={options} defaultValue={["Pear"]} />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item
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
                defaultValue="35000"
                style={{ width: 120 }}
                options={salaryOptions}
              />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item
              label="Date"
              name="date"
              rules={[
                {
                  required: true,
                  message: "Please input Employee name!",
                },
              ]}
            >
              <DatePicker format={"YYYY/MM/DD"} />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item
              label="notes"
              name="notes"
              rules={[
                {
                  required: true,
                  message: "Please input Employee name!",
                },
              ]}
            >
              <Input.TextArea rows={4} />
            </Form.Item>
          </Col>
          <Col span={16}>
            <Button>Cancel</Button>
          </Col>
          <Col>
            <Button>Submit</Button>
            <Button>Reset</Button>
          </Col>
        </Row>
      </Form>
    </Flex>
  );
};

export default PayrollForm;
