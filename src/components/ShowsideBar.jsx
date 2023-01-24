import {
  FaSearch,
  FaShoppingBag,
  FaAngleDown,
  FaHome,
  FaUsers,
  FaMoneyBill,
} from "react-icons/fa";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from "react-router-dom";

const ShowSideBar = ({ show, handleClose }) => {
  return (
    <Offcanvas show={show} onHide={handleClose}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>
          <div className="sidebarInput d-flex justify-content-center align-items-center">
            <input
              type="text"
              placeholder="Search for anything"
              className="p-1 "
            />
            <button>
              <FaSearch />
            </button>
          </div>
        </Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body className="py-4 p-0">
        <main className="showsidebar">
          <p className="ms-4">docs</p>
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
            <Link to={"/dashboard"}> Users</Link>
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
        </main>
      </Offcanvas.Body>
    </Offcanvas>
  );
};
export default ShowSideBar;
