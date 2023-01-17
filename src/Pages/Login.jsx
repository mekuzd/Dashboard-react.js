import { useState } from "react";

const Login = () => {
  const [show, setshow] = useState(false);
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
          <form action="">
            <div>
              <input type="text" placeholder="Email" />
            </div>{" "}
            <br />
            <div className="pass">
              <input type={show ? "text" : "password"} placeholder="Password" />
              <span onClick={() => setshow(!show)}>
                {show ? "hide" : "show"}
              </span>
            </div>
            <p className="forgot">Forgot password</p>
            <button>Login</button>
          </form>
        </div>
      </main>
    </>
  );
};
export default Login;
