import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ProfileItem = ({
  profile: {
    user: { _id, name, avatar },
    status,
    location,
    sex_preferences,
    gender
  }
}) => {
  return (
    <div className='profile bg-light'>
      <img src={avatar} className='round-img' alt='' />
      <div>
        <h2>{name}</h2>
        <p>
          {status} {gender && <span className='badge'>{gender}</span>}
        </p>
        <p className='my-1'>{location && <span>{location}</span>}</p>
        <Link to={`/profile/${_id}`} className='btn btn-primary'>
          View Profile
        </Link>
      </div>

      <ul>
        {sex_preferences.slice(0, 4).map((sex_preferance, index) => (
          <li key={index} className='text-primary'>
            <i className='fas fa-check'></i>
            {sex_preferance}
          </li>
        ))}
      </ul>
    </div>
  );
};

ProfileItem.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileItem;
