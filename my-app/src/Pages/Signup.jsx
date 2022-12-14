import React, { useEffect, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useContext } from "react";

import "./authentication.css";
import { Heading, Center } from "@chakra-ui/react";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
const SignUp = () => {
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
            <input type={"email"} required placeholder="Enter Email" />
            <input type={"password"} placeholder="Enter Password" />
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
