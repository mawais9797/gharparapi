const initialState = {
  users: [],
  myUser: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "USER_CREATED":
      return {
        ...state,
        myUser: [action.payload],
      };

    case "USER_LOGIN_SUCCESSFUL":
      return {
        myUser: [action.payload],
      };

    default:
      return state;
  }
};

export default userReducer;
