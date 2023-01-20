import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
// import "bootstrap/dist/css/bootstrap.min.css";
import http from "../Config/http";
import { BsTextCenter } from "react-icons/bs";
function FetchUsers() {
  const [Users, setUsers] = useState([]);
  const [Loading, setLoading] = useState(true);
  const [date, setDate] = useState();

  let Month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let isMounted = true;

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await http("/users");
        setUsers(response.data);
        setLoading(false);
      } catch (error) {
        setUsers([]);
      }
    };
    if (isMounted) {
      fetchUsers();
    }
    return () => {
      isMounted = false;
    };
  }, []);
  console.log(Users);
  return (
    <Table responsive>
      <thead>
        <tr>
          <th>
            <div>
              {" "}
              organization <BsTextCenter />
            </div>
          </th>
          <th>
            <div>
              Username <BsTextCenter />
            </div>
          </th>
          <th>
            <div>
              Email <BsTextCenter />
            </div>
          </th>
          <th>
            <div>
              Phone number <BsTextCenter />
            </div>
          </th>
          <th>
            <div>
              date joined <BsTextCenter />
            </div>
          </th>
          <th>
            <div>
              status <BsTextCenter />
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        {Users.map((user) => (
          <tr key={user.id}>
            <td>{user?.orgName}</td>
            <td>{user?.userName}</td>
            <td>{user?.email}</td>
            <td>{String(user?.phoneNumber)}</td>
            <td>
              {Month[new Date(user.createdAt).getMonth()]}{" "}
              {new Date(user.createdAt).getDate()},{" "}
              {new Date(user.createdAt).getFullYear()}{" "}
              {new Date(user.createdAt).getHours()}:
              {new Date(user.createdAt).getMinutes() < 10
                ? `0${new Date(user.createdAt).getMinutes()}`
                : new Date(user.createdAt).getMinutes()}{" "}
              {new Date(user.createdAt).getHours() > 12 ? "PM" : "AM"}
            </td>
            <td>@mdo</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default FetchUsers;
