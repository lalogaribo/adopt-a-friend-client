import React, { useState, useEffect } from "react";

export default function UserProfile() {
  const [userInfo, setUserInfo] = useState({});
  useEffect(() => {
    fetch("http://localhost:3001/api/v1/current_user", {
      credentials: "include",
    })
      .then((resp) => resp.json())
      .then((user) => {
        console.log(user.user);
        setUserInfo(user.user);
      });
  }, []);
  return (
    <div>
      <h3>user profile</h3>
      {userInfo.username}
    </div>
  );
}
