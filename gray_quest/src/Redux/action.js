import {
  GET_SINGLE_USER,
  GET_SINGLE_USER_ERROR,
  GET_SINGLE_USER_LOADING,
  GET_USERS,
  GET_USERS_ERROR,
  GET_USERS_LOADING,
} from "./actionTypes";
import axios from "axios";

export const getUsers = (payload) => ({
  type: GET_USERS,
  payload,
});
export const getSingleUser = (payload) => ({
  type: GET_SINGLE_USER,
  payload,
});
export const getUsersLoading = () => ({
  type: GET_USERS_LOADING,
});
export const getSingleUserLoading = () => ({
  type: GET_SINGLE_USER_LOADING,
});
export const getUsersError = () => ({
  type: GET_USERS_ERROR,
});
export const getSingleUserError = () => ({
  type: GET_SINGLE_USER_ERROR,
});

export const fetchUsers = async () => {
  try {
    const res = await axios.get(`https://jsonplaceholder.typicode.com/users`);
    return res.data;
  } catch (error) {
    return;
  }
};

export const fetchSingleUser = async (id) => {
  try {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    return res.data;
  } catch (error) {
    return;
  }
};
