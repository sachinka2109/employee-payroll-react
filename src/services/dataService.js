import axios from 'axios';

export const getEmployee = () => {
    const response = axios.get("http://localhost:3001/employee");
    return response;
}

export const addEmployee = (data) => {
    const response = axios.post("http://localhost:3001/employee",data);
    return response;
}

export const updateEmployee = (id,data) => {
    const response = axios.put(`http://localhost:3001/employee/${id}`,data);
    return response;
}

export const deleteEmployee = (id) => {
    const response = axios.delete(`http://localhost:3001/employee/${id}`);
    return response;
}