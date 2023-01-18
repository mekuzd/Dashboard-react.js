import { FaSearch, FaRegBell, FaAngleDown } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav>
      <div className="logos">
        <img src="../Union.png" alt="" className="unionImg" />
        <img src="../lendsqr.png" alt="" />
      </div>
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
