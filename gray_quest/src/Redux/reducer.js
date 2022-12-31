import {
  GET_SINGLE_USER,
  GET_SINGLE_USER_ERROR,
  GET_SINGLE_USER_LOADING,
  GET_USERS,
  GET_USERS_ERROR,
  GET_USERS_LOADING,
} from "./actionTypes";

const initialState = {
  users: [],
  loading: false,
  error: false,
  user: {},
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_USERS_LOADING: {
      return {
        users: [],
        loading: true,
        error: false,
        user: {},
      };
    }
    case GET_USERS_ERROR: {
      return {
        users: [],
        loading: false,
        error: true,
        user: {},
      };
    }
    case GET_USERS: {
      return {
        users: payload,
        loading: false,
        error: false,
        user: {},
      };
    }
    case GET_SINGLE_USER: {
      return {
        users: [],
        loading: false,
        error: false,
        user: payload,
      };
    }
    case GET_SINGLE_USER_LOADING: {
      return {
        users: [],
        loading: true,
        error: false,
        user: {},
      };
    }
    case GET_SINGLE_USER_ERROR: {
      return {
        users: [],
        loading: false,
        error: true,
        user: {},
      };
    }
    default: {
      return state;
    }
  }
};
