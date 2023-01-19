import { FaSearch, FaRegBell, FaAngleDown, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav>
      <div className="Bar">
        <FaBars className="bars" />
      </div>
      <Link to={"/"} className="logos">
        <img src="../Union.png" alt="" className="unionImg" />
        <img src="../lendsqr.png" alt="" className="lendsqr" />
      </Link>
      {/* input  */}
      <div>
        <form action="">
          <div className="navInput">
            <input type="text" placeholder="Search for anything" />
            <button>
              <FaSearch />
            </button>
          </div>
        </form>
      </div>
      {/* navicons  */}
      <div className="navicons">
        <p className="doc">Docs</p>
        <p>
          <FaRegBell className="FaBell" />
        </p>
        <div className="userImg">
          <img src="" alt="" />
        </div>
        <div className="userName">
          <h3>Adedeji</h3>
          <p className="angledown">
            <FaAngleDown />
          </p>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
