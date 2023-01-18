import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [show, setshow] = useState(false);
  const navigate = useNavigate();
  const state = useRef({ email: "", password: "" });

  const handleLogin = (e) => {
    e.preventDefault();

    if (
      state.current.email == "admin@gmail.com" &&
      state.current.password == "password"
    ) {
      navigate("/dashboard");
    } else {
      setalert(true);
      setalertMessage("Password length is less than 8");
    }
  };
  return (
    <>
      {/* logos  */}
      <div className="logo">
        <img src="../Union.png" alt="" className="unionImg" />
        <img src="../lendsqr.png" alt="" />
      </div>

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
            <div>
              <input
                type="text"
                placeholder="Email"
                onChange={(e) => (state.current.email = e.target.value)}
              />
            </div>{" "}
            <br />
            <div className="pass">
              <input
                type={show ? "text" : "password"}
                placeholder="Password"
                onChange={(e) => (state.current.password = e.target.value)}
              />
              <span onClick={() => setshow(!show)}>
                {show ? "hide" : "show"}
              </span>
            </div>
            <p className="forgot">Forgot password</p>
            <button type="submit">Login</button>
          </form>
        </div>
      </main>
    </>
  );
};
export default Login;
