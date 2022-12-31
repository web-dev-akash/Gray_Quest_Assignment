import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  fetchUsers,
  getUsers,
  getUsersError,
  getUsersLoading,
} from "../../Redux/action";

export const User = () => {
  const navigate = useNavigate();
  const state = useSelector((state) => state);
  const { loading, users, error } = state;
  const dispatch = useDispatch();
  const getData = async () => {
    try {
      dispatch(getUsersLoading());
      const data = await fetchUsers();
      dispatch(getUsers(data));
    } catch (error) {
      dispatch(getUsersError());
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return (
      <div className="Loading">
        <h1>Loading...</h1>
      </div>
    );
  }

  if (error || users === undefined) {
    return (
      <div>
        <h1>Something Went Wrong. Please Try Again</h1>
      </div>
    );
  }

  return (
    <div className="users">
      {users.map(({ id, name, phone, username }) => (
        <div key={id} className="userDiv">
          <h2>Username : {username}</h2>
          <h2>Name : {name}</h2>
          <h2>Phone : {phone}</h2>
          <button onClick={() => navigate(`/${id}`)}>More Details</button>
        </div>
      ))}
    </div>
  );
};
