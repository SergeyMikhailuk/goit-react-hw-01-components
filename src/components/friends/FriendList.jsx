import React from 'react';
import PropTypes from 'prop-types';
import style from './FriendsList.module.css';

const FriendsList = ({ friends }) => {
  return (
    <ul className={style.friendsList}>
      {friends.map(friend => {
        return (
          <li className={style.item} key={friend.id}>
            <span className={style.status} style={{ backgroundColor: friend.isOnline ? "green" : "red" }}></span>
            <img className={style.avatar} src={friend.avatar} alt="аватарка" width="60" />
            <p className={style.name}>{friend.name}</p>
          </li>
        )
      })}
    </ul>
  )
}


FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
export default FriendsList;