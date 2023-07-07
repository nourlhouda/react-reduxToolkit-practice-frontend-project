import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadUser } from "../slices/userSlice";

function Profile() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser());
  },[dispatch]);
  return (
    <>
      <div>Profile</div>
    </>
  );
}

export default Profile;
