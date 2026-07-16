import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Card,
  Form,
  Button,
  Row,
  Col
} from "react-bootstrap";

function CreateEmployee() {

  const navigate = useNavigate();

  const [departments, setDepartments] = useState([]);

  const [employee, setEmployee] = useState({

    firstName: "",
    lastName: "",
    salary: "",
    gender: "Male",
    birthdate: "",
    depId: ""

  });

  useEffect(() => {

    axios
      .get("http://127.0.0.1:3001/departments")
      .then(res => setDepartments(res.data));

  }, []);

  const handleChange = (e) => {

    const { name, value } = e.target;

    setEmployee({

      ...employee,

      [name]: value

    });

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (
      employee.firstName === "" ||
      employee.lastName === "" ||
      employee.salary === "" ||
      employee.depId === ""
    ) {

      alert("Please fill all required fields");

      return;

    }

    const newEmployee = {

      empName: {

        firstName: employee.firstName,

        lastName: employee.lastName

      },

      empSalary: Number(employee.salary),

      empGender: employee.gender,

      empBirthdate: employee.birthdate,

      depId: Number(employee.depId),

      supervisorId: null,

      dependents: []

    };

    await axios.post(

      "http://127.0.0.1:3001/employees",

      newEmployee

    );

    alert("Create Successfully!");

    navigate("/");

  };

  return (

    <Container className="mt-4">

      <Card className="p-4">

        <h2>Create Employee</h2>

        <Form onSubmit={handleSubmit}>

          <Row>

            <Col>

              <Form.Group className="mb-3">

                <Form.Label>First Name</Form.Label>

                <Form.Control

                  name="firstName"

                  value={employee.firstName}

                  onChange={handleChange}

                />

              </Form.Group>

            </Col>

            <Col>

              <Form.Group className="mb-3">

                <Form.Label>Last Name</Form.Label>

                <Form.Control

                  name="lastName"

                  value={employee.lastName}

                  onChange={handleChange}

                />

              </Form.Group>

            </Col>

          </Row>

          <Form.Group className="mb-3">

            <Form.Label>Salary</Form.Label>

            <Form.Control

              type="number"

              name="salary"

              value={employee.salary}

              onChange={handleChange}

            />

          </Form.Group>

          <Form.Group className="mb-3">

            <Form.Label>Gender</Form.Label>

            <Form.Select

              name="gender"

              value={employee.gender}

              onChange={handleChange}

            >

              <option>Male</option>

              <option>Female</option>

            </Form.Select>

          </Form.Group>

          <Form.Group className="mb-3">

            <Form.Label>Birthdate</Form.Label>

            <Form.Control

              type="date"

              name="birthdate"

              value={employee.birthdate}

              onChange={handleChange}

            />

          </Form.Group>

          <Form.Group className="mb-3">

            <Form.Label>Department</Form.Label>

            <Form.Select

              name="depId"

              value={employee.depId}

              onChange={handleChange}

            >

              <option value="">Choose...</option>

              {
                departments.map(dep => (

                  <option

                    key={dep.id}

                    value={dep.id}

                  >

                    {dep.depName}

                  </option>

                ))
              }

            </Form.Select>

          </Form.Group>

          <Button type="submit">

            Save

          </Button>

          <Button

            variant="secondary"

            className="ms-2"

            onClick={() => navigate("/")}

          >

            Cancel

          </Button>

        </Form>

      </Card>

    </Container>

  );

}

export default CreateEmployee;