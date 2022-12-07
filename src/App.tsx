import React, { useEffect } from "react";
import "./App.css";
import { UsersWidget } from "./components/UsersList";
import data from "./data/initData.json";
import { useAppDispatch, useAppSelector } from "./Hooks";
import { upadteUsers } from "./store/Reducer";

function App() {
  const dispatch = useAppDispatch();
  const users = useAppSelector(state => state.widget.users)

  useEffect(() => {
    dispatch(upadteUsers(data));
  });

  return (
    <div className="wrapper">
      <UsersWidget {...users} />
    </div>
  );
}

export default App;
