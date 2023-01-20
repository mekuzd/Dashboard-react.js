import { useState, useEffect } from "react";
import { FaUserFriends } from "react-icons/fa";
import FetchUsers from "./FetchUsers";
import http from "../Config/http";
import PaginateBtn from "./PaginationBtn";

const Users = () => {
  const [Users, setUsers] = useState([]);
  const [Loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);

  const paginate = (users) => {
    const itemsPerPage = 10;
    const numberOfPages = Math.ceil(users.length / itemsPerPage);
    const newFollowers = Array.from({ length: numberOfPages }, (_, index) => {
      const start = index * itemsPerPage;
      return users.slice(start, start + itemsPerPage);
    });
    return newFollowers;
  };

  let isMounted = true;

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await http("/users");
        setUsers(paginate(response.data)[page]);
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
  }, [page]);

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

      {Loading ? (
        <div className="w-25 m-auto pt-3">
          <div className="spinner-border "></div>
        </div>
      ) : (
        <div>
          <FetchUsers Loading={Loading} Users={Users} setUsers={setUsers} />
          <PaginateBtn Users={Users} page={page} setPage={setPage} />
        </div>
      )}
    </div>
  );
};
export default Users;
