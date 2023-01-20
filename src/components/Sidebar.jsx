import {
  FaShoppingBag,
  FaAngleDown,
  FaHome,
  FaUsers,
  FaMoneyBill,
} from "react-icons/fa";

const SideBar = () => {
  return (
    <aside className="">
      <div>
        <FaShoppingBag />
        <p> Switch Organization</p>
        <FaAngleDown />
      </div>
      <div className="dashboard">
        <FaHome />
        <p> Dashboard</p>
      </div>
      {/* Customers */}
      <h5> Customers</h5>
      <div className="activeTab">
        <FaUsers />
        <p> Users</p>
      </div>{" "}
      <div>
        <FaUsers />
        <p> Guarantors</p>
      </div>{" "}
      <div>
        <FaMoneyBill />
        <p> Loans</p>
      </div>{" "}
      <div>
        <FaHome />
        <p> Desicion Models</p>
      </div>{" "}
      <div>
        <FaHome />
        <p> Savings</p>
      </div>{" "}
      <div>
        <FaHome />
        <p> Loan Request</p>
      </div>{" "}
      <div>
        <FaHome />
        <p> Whitelist</p>
      </div>{" "}
      <div>
        <FaHome />
        <p> Karma</p>
      </div>{" "}
      {/* businesses */}
      <h5>Busineses</h5>
      <div>
        <FaHome />
        <p> Dashboard</p>
      </div>{" "}
      <div>
        <FaHome />
        <p> Dashboard</p>
      </div>{" "}
      <div>
        <FaHome />
        <p> Dashboard</p>
      </div>{" "}
      <div>
        <FaHome />
        <p> Dashboard</p>
      </div>
    </aside>
  );
};
export default SideBar;
