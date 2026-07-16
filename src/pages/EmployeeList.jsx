import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Table
} from "react-bootstrap";

function EmployeeList() {

  const navigate = useNavigate();

  const [employees, setEmployees] = useState([]);
  const [filteredEmployees, setFilteredEmployees] = useState([]);

  const [departments, setDepartments] = useState([]);
  const [projects, setProjects] = useState([]);
  const [workons, setWorkons] = useState([]);

  const [search, setSearch] = useState("");

  const [selectedDepartments, setSelectedDepartments] = useState([]);

  useEffect(() => {

    Promise.all([
      axios.get("http://127.0.0.1:3001/employees"),
      axios.get("http://127.0.0.1:3001/departments"),
      axios.get("http://127.0.0.1:3001/projects"),
      axios.get("http://127.0.0.1:3001/workons")
    ])

      .then(([empRes, depRes, proRes, workRes]) => {

        const sorted = empRes.data.sort(
          (a, b) => b.empSalary - a.empSalary
        );

        setEmployees(sorted);
        setFilteredEmployees(sorted);

        setDepartments(depRes.data);
        setProjects(proRes.data);
        setWorkons(workRes.data);

      })

      .catch(err => console.log(err));

  }, []);

  useEffect(() => {

    let result = [...employees];

    if (search !== "") {

      result = result.filter(emp => {

        const fullname =
          (
            emp.empName.firstName +
            " " +
            emp.empName.lastName
          ).toLowerCase();

        return fullname.includes(search.toLowerCase());

      });

    }

    if (selectedDepartments.length > 0) {

      result = result.filter(emp =>
        selectedDepartments.includes(emp.depId)
      );

    }

    setFilteredEmployees(result);

  }, [employees, search, selectedDepartments]);

  const handleDepartment = (id) => {

    if (selectedDepartments.includes(id)) {

      setSelectedDepartments(
        selectedDepartments.filter(x => x !== id)
      );

    }

    else {

      setSelectedDepartments([
        ...selectedDepartments,
        id
      ]);

    }

  };

  const getDepartmentName = (depId) => {

    const dep = departments.find(
      d => Number(d.id) === depId
    );

    return dep ? dep.depName : "";

  };

  const getProjects = (empId) => {

    const list = workons.filter(
      w => w.empId === Number(empId)
    );

    return list.map(work => {

      const project = projects.find(
        p => Number(p.id) === work.proId
      );

      return (
        <div key={work.id}>
          {project?.proName} ({work.workHours} hrs)
        </div>
      );

    });

  };

  const deleteEmployee = async (id) => {

    if (!window.confirm("Delete this employee?"))
      return;

    await axios.delete(
      `http://127.0.0.1:3001/employees/${id}`
    );

    const newList =
      employees.filter(emp => emp.id !== id);

    setEmployees(newList);

  };

  return (

    <Container className="mt-4">

      <h2 className="text-center mb-4">
        Employee Management
      </h2>

      <Row>

        <Col md={3}>

          <Card className="p-3">

            <h5>Department</h5>

            {
              departments.map(dep => (

                <Form.Check

                  key={dep.id}

                  type="checkbox"

                  label={dep.depName}

                  onChange={() =>
                    handleDepartment(Number(dep.id))
                  }

                />

              ))
            }

          </Card>

        </Col>

        <Col md={9}>

          <Row className="mb-3">

            <Col md={8}>

              <Form.Control

                placeholder="Search employee..."

                value={search}

                onChange={(e) =>
                  setSearch(e.target.value)
                }

              />

            </Col>

            <Col md={4}>

              <Button

                className="w-100"

                onClick={() =>
                  navigate("/employee/create")
                }

              >

                Create Employee

              </Button>

            </Col>

          </Row>

          <Table bordered hover>

            <thead>

              <tr>

                <th>ID</th>

                <th>Full Name</th>

                <th>Salary</th>

                <th>Gender</th>

                <th>Department</th>

                <th>Dependents</th>

                <th>Projects</th>

                <th>Action</th>

              </tr>

            </thead>

            <tbody>
                        {filteredEmployees.map((employee) => (

              <tr key={employee.id}>

                <td>{employee.id}</td>

                <td>
                  {employee.empName.lastName}{" "}
                  {employee.empName.firstName}
                </td>

                <td>
                  {employee.empSalary.toLocaleString()}
                </td>

                <td>{employee.empGender}</td>

                <td>
                  {getDepartmentName(employee.depId)}
                </td>

                <td>
                  {employee.dependents.length}
                </td>

                <td>
                  {getProjects(employee.id)}
                </td>

                <td>

                  <Button
                    variant="info"
                    size="sm"
                    className="me-2"
                    onClick={() =>
                      navigate(`/employee/${employee.id}`)
                    }
                  >
                    Detail
                  </Button>

                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() =>
                      deleteEmployee(employee.id)
                    }
                  >
                    Delete
                  </Button>

                </td>

              </tr>

            ))}

            </tbody>

          </Table>

        </Col>

      </Row>

    </Container>

  );

}

export default EmployeeList;