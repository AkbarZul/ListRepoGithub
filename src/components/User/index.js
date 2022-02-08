import React from "react";
import { FaUsers, FaMapMarkedAlt, FaLink } from "react-icons/fa";
import "./user.css";

const User = (props) => {
  const prof = props.prof;
  return (
    <>
      <div className="containerUser">
        <div>
          <img src={prof.avatar_url} className="avatar" />
          <p>{prof.name}</p>
          <p>{prof.bio}</p>
          {prof.company && (
            <div>
              <FaUsers className="icons" />
              <p>{prof.company}</p>
            </div>
          )}
          {prof.location && (
            <div>
              <FaMapMarkedAlt className="icons" />
              <p>{prof.location}</p>
            </div>
          )}
          {prof.blog && (
            <div>
              <FaLink className="icons" />
              <p>{prof.blog}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default User;
