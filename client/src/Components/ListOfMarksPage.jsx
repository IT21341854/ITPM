import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import '../ListMarks.css'; // Import CSS file
import Header from '../frame/Header'
import Sidebar from '../frame/Sidebar'



const ListMarks = () => {
    
    const [marks, setMarks] = useState([]);

    useEffect(() => {
        getAllMarks();
    }, []);

    const getAllMarks = async () => {
        try {
            const response = await axios.get("http://localhost:3000/api/marksroutes/marks/all");
            console.log(response);
            if (response.data) {
                setMarks(response.data.marks);
            }
        } catch (error) {
            console.error('Error fetching marks:', error);
        }
    };

    const handleDelete = async (studentID) => {
        try {
            const response = await axios.delete(`http://localhost:3000/api/marksroutes/marks/${studentID}`);
            console.log(response);
            getAllMarks();
        } catch (error) {
            console.error('Error deleting mark:', error);
        }
    };

    return (
        
        <Container className="table-container">

            <Table striped bordered hover className="table">
                <thead>
                    <tr>
                        <th>Student ID</th>
                        <th>Student Name</th>
                        <th>Report Type</th>
                        <th>Mark</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {marks.length > 0 && marks.map((mark, index) => (
                        <tr key={index}>
                            <td>{mark.studentID}</td>
                            <td>{mark.studentName}</td>
                            <td>{mark.report_type}</td>
                            <td>{mark.marks}</td>
                            <td>
                                <button className="btn btn-primary">Edit</button>
                                <button className="btn btn-danger" onClick={() => handleDelete(mark.studentID)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
};

export default ListMarks;
