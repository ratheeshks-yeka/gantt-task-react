import * as React from "react";
import Odoo from 'react-native-odoo';

import './style.css';
import "gantt-task-react/dist/index.css";

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
// const URL: string = (process.env.REACT_APP_BASE_API_URL as string);

const authenticate = async (username: string, password: string): Promise<boolean> => {
  return new Promise<boolean>((resolve, reject) => {
    const odoo = new Odoo({
      host: "195.35.6.94",
      port: "8080",
      database: "dev",
      username: "admin", 
      password: "admin@123" 
    });

    odoo.connect((err: any, res: any) => {
      if (err) {
        console.error(err);
        reject(false);
      } else {
        console.log('Authenticated With Odoo server.',res);
        resolve(true);
      }
    });
  });
}

export default function Login() {
  const [state, dispatch] = React.useReducer(loginReducer, initialState);
  const { username, password, isLoading, error } = state;

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({ type: "login" });

    try {
      const isAuthenticated = await authenticate(username, password);
      console.log(isAuthenticated)
      if (isAuthenticated) {
        dispatch({ type: "success" });
        localStorage.setItem("isLoggedIn", "true");
        window.location.reload();
      } else {
        dispatch({ type: "error" });
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
