import React, { useState } from "react";
import { signUp } from "../Services/firebase";
import { useNavigate, Link } from "react-router-dom";

export const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    await signUp(name, phone, email, password, setError);
    navigate("/dashboard");
  };
  return (
    <div>
      <div className="bg-gray-100 rounded-lg text-black p-2">
        <form method="POST" className="w-96 p-3  flex flex-col gap-6">
          <input
            className="rounded-md p-4 outline-none focus:outline-green-300 "
            type="text"
            placeholder="Name "
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="rounded-md p-4 outline-none focus:outline-green-300 "
            type="email"
            placeholder="Email "
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="rounded-md p-4 outline-none focus:outline-green-300 "
            type="text"
            placeholder="Phone "
            onChange={(e) => setPhone(e.target.value)}
          />
          <input
            className="rounded-md p-4 outline-none focus:outline-green-300 "
            type="password"
            placeholder="Password "
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && (
            <div className=" bg-red-400 p-2 rounded-md">
              Something Went Wrong{" "}
            </div>
          )}
          <button
            className="bg-sky-200 p-2 text-cente hover:scale-105 duration-200 hover:bg-blue-400 rounded-md shadow-md shadow-gray-200"
            onClick={handleSubmit}
          >
            Sign Up
          </button>
        </form>
        <p className="text-sm">
          Already have an Account ?{" "}
          <Link
            className=" text-purple-500 font-semibold underline"
            to="/login"
          >
            LogIn
          </Link>
        </p>
      </div>
    </div>
  );
};
