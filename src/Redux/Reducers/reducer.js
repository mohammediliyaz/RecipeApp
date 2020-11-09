import history from "../../history/History";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

toast.configure();

const initialState = {
  tokenid: null,
};

const reducer = (state = initialState, action) => {
  const newState = { ...state };

  if (action.type === "LOGIN_ASYNC") {
    history.push("/Home");
    newState.tokenid = action.value;
    sessionStorage.setItem("key", action.value);
    toast.success("login successfully", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 2000,
    });
  }
  if (action.type === "LOGIN_ASYNC_ERROR") {
    console.log(action.error);
    toast.error("mail or password is incorrect", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 4000,
    });
    history.push("/");
  }
  return newState;
};

export default reducer;
