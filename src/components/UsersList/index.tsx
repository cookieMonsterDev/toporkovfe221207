import { useState } from "react";
import "./styles.css";
import ListItem from "./ListItem";
import { useAppSelector } from "../../Hooks";
import UserCard from "./UserCard";

export interface UserListProps {
  phone: string;
  name: string;
  nickname: string;
  email: string;
  position: string;
  photo: string;
}

export const UsersWidget = (data: UserListProps[]) => {
  
  const users = Object.values(data);
  const [isExpanded, setExpaned] = useState(false);
  const isCard = useAppSelector(state => state.widget.isOpen)

  if(isCard) {
    return <UserCard />
  }

  return (
    <div className="list-warpper">
      {users.slice(0, 3).map((item) => {
        return <ListItem key={item.phone} {...item} />;
      })}
      {isExpanded &&
        users.slice(3).map((item) => {
          return <ListItem key={item.phone} {...item} />;
        })}
      {!isExpanded && (
        <button
          className="list-warpper_button"
          onClick={() => setExpaned((prev) => !prev)}
        >
          View all
        </button>
      )}
    </div>
  );
};

