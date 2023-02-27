import React from "react";

export const Register = () => {
  return (
    <div>
      <div>
        <form className="w-96 p-3  flex flex-col gap-6">
          <input
            className="rounded-md p-4 outline-none focus:outline-green-300 "
            type="text"
            placeholder="Name "
          />
          <input
            className="rounded-md p-4 outline-none focus:outline-green-300 "
            type="email"
            placeholder="Email "
          />
          <input
            className="rounded-md p-4 outline-none focus:outline-green-300 "
            type="text"
            placeholder="Phone "
          />
          <input
            className="rounded-md p-4 outline-none focus:outline-green-300 "
            type="password"
            placeholder="Password "
          />
        </form>
        <p className="text-1xl text-white">Already have ac Account ? LogIn</p>
      </div>
    </div>
  );
};
