import React from "react";
import { useAppDispatch } from "../../Hooks";
import { upadteUser, updateWindow } from "../../store/Reducer";
import "./styles.css";

interface ListIetmProps {
  phone: string;
  name: string;
  nickname: string;
  email: string;
  position: string;
  photo: string;
}

const ListItem = (props: ListIetmProps) => {
  const dispatch = useAppDispatch();

  const handleView = () => {
    dispatch(updateWindow(true));
    dispatch(upadteUser(props));
  };

  return (
    <span className="users-widget-list_item">
      <section>
        <img src={require(`../../data/img/${props.photo}`)} alt={props.photo} />
        <div>
          <h1>{props.name}</h1>
          <h1>{props.nickname}</h1>
        </div>
      </section>
      <button
        className="users-widget-list_item"
        onClick={handleView}
      >
        View
      </button>
    </span>
  );
};

export default ListItem;
