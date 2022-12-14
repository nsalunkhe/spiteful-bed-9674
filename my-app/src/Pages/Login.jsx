import "./authentication.css";
import React, { useState, useContext, useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Heading, Center } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
const Login = () => {
  const [error, setError] = useState(false);
  return (
    <div className="login-main-container">
      <div>
        <img src="https://us.123rf.com/450wm/millena12/millena121811/millena12181100016/millena12181100016.jpg?ver=6" />
      </div>

      <div className="login-container">
        <Center>
          <Heading marginTop={10}>Login</Heading>
        </Center>
        <div>
          {error && <div className="error">{error}</div>}
          <form>
            <input type={"email"} required placeholder="Enter Email" />
            <input type={"password"} placeholder="Enter Password" />
            <div className="admin-check">
              <input type="checkbox" placeholder="Login as admin" id="admin" />
              <label htmlFor="admin">Login as admin</label>
            </div>
            <input type={"submit"} id="submit" />
          </form>

          <div className="google-login">
            <div>
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png" />
            </div>
            <div>Login with Google</div>
          </div>
          <div>
            <p>
              Don't have an account? <Link to={"/Signup"}>Signup</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
