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
  const { name, usename, phone, email, website, address, company } = user;
  useEffect(() => {
    dispatch(getSingleUserLoading());
    fetchSingleUser(id)
      .then((res) => {
        dispatch(getSingleUser(res));
      })
      .catch((error) => {
        dispatch(getSingleUserError());
        console.log(error);
      });
  }, []);

  if (loading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }

  if (error || !user) {
    return (
      <div>
        <h1>Something Went Wrong. Please Try Again</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>{name}</h1>
      <h1>{usename}</h1>
      <h1>{phone}</h1>
      <h1>{email}</h1>
      <h1>{website}</h1>
    </div>
  );
};
