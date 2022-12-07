import React from "react";
import { useAppDispatch, useAppSelector } from "../../Hooks";
import { updateWindow } from "../../store/Reducer";
import "./styles.css";

const UserCard = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(state => state.widget.user)

  return (
    <div className="user-card">
      <section>
        <img src={require(`../../data/img/${user?.photo}`)} alt={user?.photo} />
        <div>
          <h1>{user?.name}</h1>
          <h1>{user?.nickname}</h1>
        </div>
      </section> 
      <div className="close_button" onClick={() => dispatch(updateWindow(false))}></div>
    </div>
  );
};

export default UserCard;
