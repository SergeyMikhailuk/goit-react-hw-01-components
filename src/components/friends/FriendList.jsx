import React from 'react';
import PropTypes from 'prop-types';

const FriendsList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(friend => {
        return (
          <li className="item" key={friend.id}>
            <span className="status">{friend.isOnline ? "Online" : "Offline"}</span>
            <img className="avatar" src={friend.avatar} alt="" width="48" />
            <p className="name">{friend.name}</p>
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