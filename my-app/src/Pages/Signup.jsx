import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useContext } from "react";

import "./authentication.css";
import { Heading, Center } from "@chakra-ui/react";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
import { signUp } from "../redux/auth/auth.actions";
import { useDispatch } from "react-redux";
const SignUp = () => {
  const initialUser = {
    email: "",
    password: "",
  };
  const [user, setUser] = useState(initialUser);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const toast = useToast();
  const dispatch = useDispatch();
  // console.log("Authentication is ", Authentication);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    try {
      dispatch(signUp(user.email, user.password));
      toast({
        title: "Registration Successful",
        status: "success",
        isClosable: true,
        position: "top",
      });
      navigate("/login");
    } catch (error) {
      setError(error.message);
    }
    axios.post(`http://localhost:8080/users`, user);
  };
  useEffect(() => {
    error &&
      toast({
        title: error,
        status: "error",
        isClosable: true,
        position: "top",
      });
  }, [error]);
  return (
    <div className="signup-main-container">
      <div>
        <img src="https://i.pinimg.com/originals/1a/3b/df/1a3bdfe1863bb6bcc6982ed2308c2cb4.jpg" />
      </div>

      <div className="login-container signup-container">
        <Center>
          <Heading marginTop={15}>Signup</Heading>
        </Center>
        <div>
          <form>
            <input
              type={"email"}
              required
              placeholder="Enter Email"
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
            <input
              type={"password"}
              placeholder="Enter Password"
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
            <input type={"submit"} id="submit" />
          </form>
          <div>
            <p>
              Already have an account? <Link to={"/Login"}>Login</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
