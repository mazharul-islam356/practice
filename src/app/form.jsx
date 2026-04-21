import React from "react";

const Form = () => {
  return (
    <div className="w-7xl mx-auto">
      <form>
        <h1 className="text-3xl font-medium">Sign up</h1>

        <div className="space-y-3">
          <div className="space-x-2">
            <label htmlFor="name">Name: </label>
            <input
              className="border px-2 py-1 rounded-sm"
              type="text"
              placeholder="Enter your name"
            />
          </div>
          <div className="space-x-2">
            <label htmlFor="email">Email: </label>
            <input
              className="border px-2 py-1 rounded-sm"
              type="email"
              placeholder="Enter your name"
            />
          </div>
          <div className="space-x-2">
            <label htmlFor="pass">Password: </label>
            <input
              className="border px-2 py-1 rounded-sm"
              type="password"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label htmlFor="gender">Gender:</label>
            <select className="border mb-1 w-40 p-1 rounded-sm" name="gender">
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
        </div>

        <button className="bg-blue-600 text-white px-3 py-1" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Form;
