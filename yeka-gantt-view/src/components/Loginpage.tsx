import * as React from "react";
import './style.css';
import "gantt-task-react/dist/index.css";
import axios from "axios";
interface LoginState {
  password: string;
  username: string;
  isLoading: boolean;
  error: string;
  isLoggedIn: boolean;
}

type LoginAction =
  | { type: "login" | "success" | "error" | "logout" }
  | { type: "field"; fieldName: string; payload: string };

const loginReducer = (state: LoginState, action: LoginAction): LoginState => {
  switch (action.type) {
    case "field": {
      return {
        ...state,
        [action.fieldName]: action.payload
      };
    }
    case "login": {
      return {
        ...state,
        error: "",
        isLoading: true
      };
    }
    case "success": {
      return { ...state, error: "", isLoading: false, isLoggedIn: true };
    }
    case "error": {
      return {
        ...state,
        isLoading: false,
        isLoggedIn: false,
        username: "",
        password: "",
        error: "Incorrect username or password!"
      };
    }
    case "logout": {
      return {
        ...initialState,
        isLoggedIn: false
      };
    }
    default:
      return state;
  }
};

const initialState: LoginState = {
  password: "",
  username: "",
  isLoading: false,
  error: "",
  isLoggedIn: false
};

const authenticate = async (username: string, password: string) => {
  const URL: string = (process.env.REACT_APP_BASE_API_URL as string);
  const DB: string = (process.env.REACT_APP_DATABASE as string);
  var url = `${URL}web/session/authenticate`;
  var params = {
    "params": {
      db: DB,
      login: username,
      password: password
    }
  };
  var json = JSON.stringify({ params: params });
  const response = await axios.post(`${url}`
    , params
    , {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Content-Length': json.length
      },
    });
  if (response) {
    if (response?.data?.result?.uid)
      return "true"
  }
  return "false"
}

export default function Login() {
  const [state, dispatch] = React.useReducer(loginReducer, initialState);
  const { username, password, isLoading, error } = state;

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ type: "login" });
    try {
      const isAuthenticated = await authenticate(username, password)
      if (isAuthenticated === "true") {
        dispatch({ type: "success" });
        localStorage.setItem("isLoggedIn", "true");
        window.location.reload();
      } else {
        dispatch({ type: "error" });
        localStorage.setItem("isLoggedIn", "false");
      }
    } catch (error) {
      dispatch({ type: "error" });
    }
  };

  return (
    <div className="Loginpage">
      <div className="login-container">
        <form className="form" onSubmit={onSubmit}>
          {error && <p className="error">{error}</p>}
          <p>Please Login!</p>
          <input
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) =>
              dispatch({
                type: "field",
                fieldName: "username",
                payload: e.currentTarget.value
              })
            }
          />
          <input
            type="password"
            placeholder="password"
            autoComplete="new-password"
            value={password}
            onChange={(e) =>
              dispatch({
                type: "field",
                fieldName: "password",
                payload: e.currentTarget.value
              })
            }
          />
          <button type="submit" className="submit" disabled={isLoading}>
            {isLoading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}
