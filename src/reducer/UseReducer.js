export const initialState = { isLoggedIn: false, userName: "", email:""};

export const reducer = (state, action) => {
  if (action.type === "LOGIN") {
    const { userName, email} = action.payload;
    return { ...state, isLoggedIn: true, userName, email };
  } else if (action.type === "LOGOUT") {
    return { ...state, isLoggedIn: false, userName:"", email:"" };
  }
  return state;
};

/*

export const initialState = null;

export const reducer = (state, action) => {
    if(action.type === "USER"){
        return action.payload;
    }
    return state;
}


*/
