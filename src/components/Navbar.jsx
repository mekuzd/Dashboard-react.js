import { useState } from "react";
import { FaSearch, FaRegBell, FaAngleDown, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import ShowSideBar from "./ShowsideBar";
const Navbar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <nav className="p-4">
        <div className="Bar">
          <FaBars className="bars" onClick={handleShow} />
        </div>
        <Link to={"/"} className="logos ms-3">
          <img src="../Union.png" alt="" className="unionImg" />
          <img src="../lendsqr.png" alt="" className="lendsqr" />
        </Link>
        {/* input  */}
        <div className="d-none d-lg-block">
          <form action="">
            <div className="navInput d-flex justify-content-center align-items-center">
              <input
                type="text"
                placeholder="Search for anything"
                className="p-2  d-none d-lg-block"
              />
              <button>
                <FaSearch />
              </button>
            </div>
          </form>
        </div>
        {/* navicons  */}
        <div className="d-flex">
          <div className="navicons d-none d-sm-flex justify-content-evenly align-items-center   ">
            <p className="doc">Docs</p>
            <p>
              <FaRegBell className="FaBell" />
            </p>
          </div>

          <div className="d-flex justify-content-between align-items-center user">
            <div className="userImg">
              <img src="" alt="" />
            </div>
            <div className="d-flex justify-content-around align-items-center">
              <h3>Adedeji</h3>
              <p className="mt-2">
                <FaAngleDown />
              </p>
            </div>
          </div>
        </div>
      </nav>
      <ShowSideBar show={show} handleClose={handleClose} />
    </>
  );
};
export default Navbar;
