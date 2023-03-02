import React, { useState, useEffect, useContext } from "react";
import { db } from "../firebase-config";
import { query, getDocs, collection, where } from "firebase/firestore";
import { selectChats } from "../Services/selectChats";
import { authContext } from "../Context/context";

export const Search = () => {
  const currentUser = useContext(authContext);
  const [findUser, setFindUser] = useState("");
  const [user, setUser] = useState([]);
  const handleClick = async (userdoc) => {
    await selectChats(currentUser, userdoc);
    setUser((prev) => [...prev, []]);
    setFindUser((prev) => "");
  };
  const handleSearch = async () => {
    let userDataQuery = query(
      collection(db, "users"),
      where("name", "==", findUser)
    );

    try {
      let userData = await getDocs(userDataQuery);
      userData.forEach((doc) => {
        setUser((prev) => [...prev, doc.data()]);
      });
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    if (findUser.length === 0) setUser((prev) => []);
  }, [findUser]);

  const handleKey = (e) => {
    e.code === "Enter" && handleSearch();
  };

  return (
    <div className="w-full pr-2 ">
      <input
        className="p-2 ml-1 w-full ouline-none border-b-2 border-white bg-transparent focus:outline-none"
        type="text"
        placeholder="Find user"
        onChange={(event) => setFindUser(event.target.value)}
        onKeyDown={handleKey}
        value={findUser}
      />
      {user.length > 0 && (
        <div className="rounded-md p-2 cursor-pointer m-2 ml-5 flex items-start hover:bg-gray-500">
          {user.map((doc, index) => (
            <div key={index} onClick={() => handleClick(doc)}>
              {doc.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
