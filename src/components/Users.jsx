import { FaUserFriends } from "react-icons/fa";
import FetchUsers from "./FetchUsers";

const Users = () => {
  return (
    <div className="content">
      <p>Users</p>
      <div className="container-box">
        <div>
          <div className="icon">
            <FaUserFriends className="cons" />
          </div>
          <h3>USERS</h3>
          <h1>500</h1>
        </div>
        <div>
          <div className="icon">
            <FaUserFriends className="cons" />
          </div>
          <h3>active users</h3>
          <h1>500</h1>
        </div>
        <div>
          <div className="icon">
            <FaUserFriends className="cons" />
          </div>
          <h3>Users with loan</h3>
          <h1>500</h1>
        </div>
        <div>
          <div className="icon">
            <FaUserFriends className="cons" />
          </div>
          <h3>Users with savings</h3>
          <h1>500</h1>
        </div>
      </div>
      <FetchUsers />
    </div>
  );
};
export default Users;
