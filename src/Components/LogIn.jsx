import React from "react";

export const LogIn = () => {
  return (
    <div>
      <div>
        <form className="w-96 p-3  flex flex-col gap-6">
          <input
            className="rounded-md p-4 outline-none focus:outline-green-300 "
            type="email"
            placeholder="Email "
          />

          <input
            className="rounded-md p-4 outline-none focus:outline-green-300 "
            type="password"
            placeholder="Password "
          />
          <button className="bg-green-400 rounded-md text-center p-2">
            Sign Up
          </button>
        </form>
        <p className="text-1xl text-white"> Don't have an account ? SignUp</p>
      </div>
    </div>
  );
};
