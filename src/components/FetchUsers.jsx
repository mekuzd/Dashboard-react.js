import Table from "react-bootstrap/Table";
import { BsTextCenter } from "react-icons/bs";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { AiOutlineEye, AiOutlineUserAdd } from "react-icons/ai";
import { useState } from "react";
import { GrUserExpert } from "react-icons/gr";
import { Link } from "react-router-dom";

function FetchUsers({ Users }) {
  let status = ["blacklisted", "inactive", "Active", "pending"];
  const [id, setid] = useState(0);

  const showstatusBar = (id) => {
    setid(id);
  };

  const getRandomStatus = () => {
    let res = status[Math.floor(Math.random() * status.length)];
    return res;
  };

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
            <td>
              {user?.phoneNumber.length > 14
                ? user?.phoneNumber.slice(0, 13)
                : user?.phoneNumber}
            </td>
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

            <td className="position-relative">
              <main
                className={`popup  ${user.id == id ? "d-block" : "d-none"}`}
              >
                <div>
                  {" "}
                  <p>
                    <AiOutlineEye />
                  </p>{" "}
                  <Link to={`/dashboard/${user.id}`}>View Details</Link>
                </div>
                <div>
                  <p>
                    <AiOutlineUserAdd />
                  </p>
                  <Link>Blacklist User</Link>
                </div>
                <div>
                  <p>
                    <GrUserExpert />{" "}
                  </p>
                  <Link>Activate User</Link>
                </div>
              </main>
              {getRandomStatus()}
            </td>
            <td>
              <BiDotsVerticalRounded onClick={() => showstatusBar(user.id)} />
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default FetchUsers;
