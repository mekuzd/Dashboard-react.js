import Table from "react-bootstrap/Table";
import { BsTextCenter } from "react-icons/bs";
function FetchUsers({ Loading, Users }) {
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

  if (Loading) {
    return (
      <div className="w-25 m-auto pt-3">
        <div className="spinner-border "></div>
      </div>
    );
  }

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
