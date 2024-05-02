import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Header from '../frame/Header';




function AddMarksPage() {
  const [validated, setValidated] = useState(false);
  const [fieldvalueObj, setFieldvalueObj] = useState({});
  console.log(fieldvalueObj);

  const handleCancel = () => {
    // Implement cancel logic here
    console.log('Cancel clicked');
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    event.preventDefault();
    axios
      .post(
        "http://localhost:8080/api/marksroutes/marks",
        fieldvalueObj,
        {
          headers: {
            "Content-Type": "application/json",
            // Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      )
      .then((result) => {
        console.log(result.data);
       
      })
      .catch((err) => {
        console.log(err);
        
      });
    setValidated(true);
  };

  return (
    <><div className="container">
      <h1 className="form-title">Add Marks</h1>
      <Form className="form-container" noValidate validated={validated} >
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formStudentID">
            <Form.Label>Student ID</Form.Label>
            <Form.Control type="text" placeholder="Enter Student ID" required  onChange={(e) => setFieldvalueObj({...fieldvalueObj,studentID:e.target.value})}/>
            <Form.Control.Feedback type="invalid">Please enter a student ID.</Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formStudentName">
            <Form.Label>Student Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Student Name" required onChange={(e) => setFieldvalueObj({...fieldvalueObj,studentName:e.target.value})}/>
            <Form.Control.Feedback type="invalid">Please enter a student name.</Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formReportType">
            <Form.Label>Report Type</Form.Label>
            <Form.Select defaultValue="Choose..." required onChange={(e) => setFieldvalueObj({...fieldvalueObj,report_type:e.target.value})}>
              <option>Choose...</option>
              <option>Status Document1</option>
              <option>Log Book</option>
              <option>Proposal</option>
              <option>Status Document2</option>
              <option>Final </option>
              {/* Add more options as needed */}
            </Form.Select>
            <Form.Control.Feedback type="invalid">Please select a report type.</Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formMarks">
            <Form.Label>Marks</Form.Label>
            <Form.Control type="number" placeholder="Enter Marks" required onChange={(e) => setFieldvalueObj({...fieldvalueObj,marks:e.target.value})}/>
            <Form.Control.Feedback type="invalid">Please enter marks.</Form.Control.Feedback>
          </Form.Group>
        </Row>

        <div className="form-buttons">
          <Button variant="primary" type="submit" className="me-2" onClick={handleSubmit}>
            Submit
          </Button>
          <Button variant="secondary" onClick={handleCancel}>
            Cancel
          </Button>
        </div>
      </Form>
    </div>
    
      </>
  );
}

export default AddMarksPage;
