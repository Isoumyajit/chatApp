import React from "react";
import { signIn } from "../Services/firebase";
// import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";
// import { authContext } from "../Context/context";
export const LogIn = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");

  const handleSignin = async (event) => {
    event.preventDefault();
    await signIn(email, password, setError).catch((err) =>
      setError(err.message)
    );
  };
  return (
    <div>
      <div className="bg-gray-100 p-4 rounded-lg text-black">
        <form className="w-96 p-3  flex flex-col gap-6" method="POST">
          <input
            className="rounded-md p-4 outline-none focus:outline-green-300 "
            type="email"
            placeholder="Email "
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            className="rounded-md p-4 outline-none focus:outline-green-300 "
            type="password"
            placeholder="Password "
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && (
            <div className="text-red-500 p-3 text-sm">
              <span>{error}</span>
            </div>
          )}

          <button
            className="bg-green-400 rounded-md text-center p-2 hover:scale-105 duration-150 hover:bg-green-600 hover:text-white shadow-md shadow-gray-300"
            onClick={handleSignin}
          >
            Sign In
          </button>
        </form>
        <p className="text-sm">
          {" "}
          Don't have an account ?{" "}
          <Link
            className=" text-purple-500 font-semibold underline"
            to="/register"
          >
            SignUp
          </Link>
        </p>
      </div>
    </div>
  );
};
