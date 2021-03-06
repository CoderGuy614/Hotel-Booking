export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case "LOGGED_IN_USER":
      return { ...state, ...action.payload };
    case "LOGGED_OUT_USER":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
