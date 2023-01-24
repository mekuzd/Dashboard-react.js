import { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import Alert from "../components/Alert";

const Login = () => {
  const [show, setshow] = useState(false);
  const [alert, setalert] = useState(false);
  const [alertMessage, setalertMessage] = useState("");
  const navigate = useNavigate();
  const state = useRef({ email: "", password: "" });
  const closeAlert = () => {
    setalert(false);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (
      state.current.email == "admin@gmail.com" &&
      state.current.password == "password"
    ) {
      navigate("/dashboard");
    } else {
      setalert(true);
      setalertMessage("incorrect Login details");
    }
  };
  return (
    <>
      {/* logos  */}
      <Link to={"/"} className="logo">
        <img src="../Union.png" alt="" className="unionImg" />
        <img src="../lendsqr.png" alt="" />
      </Link>

      {/* welcome  */}

      <main className="welcome">
        <div className="pablo">
          <img src="../pablo-sign-in 1.svg" alt="" />
        </div>
        <div className="form">
          <h2>Welcome !</h2>
          <p className="details">Enter details to login</p>
          <br /> <br />
          <form action="" onSubmit={handleLogin}>
            {alert && (
              <Alert alertMessage={alertMessage} closeAlert={closeAlert} />
            )}
            <div>
              <input
                required
                type="text"
                placeholder="Email"
                onChange={(e) => (state.current.email = e.target.value)}
                className="p-4"
              />
            </div>{" "}
            <br />
            <div className="pass">
              <input
                required
                type={show ? "text" : "password"}
                placeholder="Password"
                onChange={(e) => (state.current.password = e.target.value)}
                className="p-4"
              />
              <span onClick={() => setshow(!show)}>
                {show ? "hide" : "show"}
              </span>
            </div>
            <p className="forgot">Forgot password ?</p>
            <button type="submit">Login</button>
          </form>
        </div>
      </main>
    </>
  );
};
export default Login;
