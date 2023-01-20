import {
  FaShoppingBag,
  FaAngleDown,
  FaHome,
  FaUsers,
  FaMoneyBill,
} from "react-icons/fa";

const SideBar = () => {
  return (
    <aside>
      <div>
        <p>
          <FaShoppingBag />
        </p>
        <p> Switch Organization</p>
        <p>
          <FaAngleDown />
        </p>
      </div>
      <div className="dashboard">
        <p>
          <FaHome />
        </p>
        <p> Dashboard</p>
      </div>
      {/* Customers */}
      <h5> Customers</h5>
      <div className="activeTab">
        <p>
          {" "}
          <FaUsers />
        </p>
        <p> Users</p>
      </div>{" "}
      <div>
        <p>
          <FaUsers />
        </p>
        <p> Guarantors</p>
      </div>{" "}
      <div>
        <p>
          <FaMoneyBill />
        </p>
        <p> Loans</p>
      </div>{" "}
      <div>
        <p>
          <FaHome />
        </p>
        <p> Desicion Models</p>
      </div>{" "}
      <div>
        <p>
          <FaHome />
        </p>
        <p> Savings</p>
      </div>{" "}
      <div>
        <p>
          <FaHome />
        </p>
        <p> Loan Request</p>
      </div>{" "}
      <div>
        <p>
          <FaHome />
        </p>
        <p> Whitelist</p>
      </div>{" "}
      <div>
        <p>
          <FaHome />
        </p>
        <p> Karma</p>
      </div>{" "}
      {/* businesses */}
      <h5>Busineses</h5>
      <div>
        <p>
          <FaHome />
        </p>
        <p> Dashboard</p>
      </div>{" "}
      <div>
        <p>
          <FaHome />
        </p>

        <p> Dashboard</p>
      </div>{" "}
      <div>
        <p>
          <FaHome />
        </p>
        <p> Dashboard</p>
      </div>{" "}
      <div>
        <p>
          <FaHome />
        </p>
        <p> Dashboard</p>
      </div>
    </aside>
  );
};
export default SideBar;
