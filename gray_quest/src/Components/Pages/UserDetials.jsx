import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  fetchSingleUser,
  getSingleUser,
  getSingleUserError,
  getSingleUserLoading,
} from "../../Redux/action";
export const UserDetials = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const { loading, error, user } = state;
  const { name, username, phone, email, website } = user;
  useEffect(() => {
    dispatch(getSingleUserLoading());
    fetchSingleUser(id)
      .then((res) => {
        console.log(res);
        dispatch(getSingleUser(res));
      })
      .catch((error) => {
        dispatch(getSingleUserError());
        console.log(error);
      });
  }, []);

  if (loading) {
    return (
      <div className="Loading">
        <h1>Loading...</h1>
      </div>
    );
  }

  if (error || !user) {
    return (
      <div
        style={{
          textAlign: "center",
        }}
      >
        <h1>Something Went Wrong. Please Try Again</h1>
      </div>
    );
  }

  return (
    <div className="user">
      <h2>Username : {username}</h2>
      <h2>Name : {name}</h2>
      <p>Phone : {phone}</p>
      <p>Email : {email}</p>
      <p>Website : {website}</p>
    </div>
  );
};
