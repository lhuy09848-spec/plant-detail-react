import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import {
  Container,
  Card,
  Table,
  Button
} from "react-bootstrap";

function EmployeeDetail() {

  const { id } = useParams();

  const navigate = useNavigate();

  const [employee, setEmployee] = useState(null);

  const [department, setDepartment] = useState("");

  useEffect(() => {

    axios
      .get(`http://127.0.0.1:3001/employees/${id}`)
      .then(res => {

        setEmployee(res.data);

        return axios.get("http://127.0.0.1:3001/departments");

      })

      .then(res => {

        const dep = res.data.find(
          d => Number(d.id) === employee?.depId
        );

        if (dep)
          setDepartment(dep.depName);

      })

      .catch(err => console.log(err));

  }, [id]);

  useEffect(() => {

    if (!employee) return;

    axios
      .get("http://127.0.0.1:3001/departments")
      .then(res => {

        const dep = res.data.find(
          d => Number(d.id) === employee.depId
        );

        if (dep)
          setDepartment(dep.depName);

      });

  }, [employee]);

  if (!employee)
    return <h3 className="text-center mt-5">Loading...</h3>;

  return (

    <Container className="mt-4">

      <Card className="p-4">

        <h2>Employee Profile:  {employee.empName.lastName}{" "}
          {employee.empName.firstName}
</h2>

        <hr />
        <p>
<b>
    Mã nhân viên:</b>{" "}
{employee.depId.toLocaleString()}
       </p>

        <p>

          <b>Mức Lương:</b>{" "}
          {employee.empSalary.toLocaleString()}

        </p>

        <p>

          <b>Gioi Tinh:</b>{" "}
          {employee.empGender}

        </p>

        <p>

          <b>Ngay Sinh:</b>{" "}
          {employee.empBirthdate}

        </p>

        <p>

          <b>Phong Ban:</b>{" "}
          {department}

        </p>
         <p>

          <b>Mã người giám sát:</b>{" "}
          {employee.supervisorId}

        </p>

        <hr />

        <h4>Người phụ thuộc </h4>

        {

          employee.dependents.length === 0 ?

          (

            <p className="text-danger">

              No dependents

            </p>

          )

          :

          (

            <Table bordered>

              <thead>

                <tr>

                 

                  <th>Ho va Ten</th>

                  <th>Ngay Sinh</th>

                  <th>Quan he</th>

                </tr>

              </thead>

              <tbody>

                {

                  employee.dependents.map(

                    (d) => (

                    

                       <tr>

                        <td>{d.fullName}</td>

                        <td>{d.birthDate}</td>

                        <td>{d.relationship}</td>

                      </tr>

                    )

                  )

                }

              </tbody>

            </Table>

          )

        }

        <Button

          variant="secondary"

          onClick={() => navigate("/")}

        >

          Quay lai danh sach

        </Button>

      </Card>

    </Container>

  );

}

export default EmployeeDetail;