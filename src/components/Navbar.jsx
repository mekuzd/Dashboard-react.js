import { FaSearch, FaRegBell, FaAngleDown, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="p-2">
      <div className="Bar">
        <FaBars className="bars" />
      </div>
      <Link to={"/"} className="logos ms-3">
        <img src="../Union.png" alt="" className="unionImg" />
        <img src="../lendsqr.png" alt="" className="lendsqr" />
      </Link>
      {/* input  */}
      <div>
        <form action="">
          <div className="navInput">
            <input
              type="text"
              placeholder="Search for anything"
              className="p-2 border d-none d-lg-block"
            />
            <button>
              <FaSearch />
            </button>
          </div>
        </form>
      </div>
      {/* navicons  */}
      <div className="navicons d-none d-sm-flex justify-content-between align-items-center">
        <p className="doc">Docs</p>
        <p>
          <FaRegBell className="FaBell" />
        </p>
        <div className="userImg">
          <img src="" alt="" />
        </div>
        <div className="d-flex justify-content-center align-items-center">
          <h3>Adedeji</h3>
          <p className="mt-2">
            <FaAngleDown />
          </p>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
