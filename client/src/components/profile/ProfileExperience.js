import React from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";

const ProfileExperience = ({
  experience: {
    title,
    feelings,
    location,
    from,
    to,
    bond_type,
    times_split,
    description
  }
}) => (
  <div>
    <h3 className='text-dark'>{title}</h3>
    <p>
      <Moment format='DD/MM/YYYY'>{from}</Moment> -{" "}
      {!to ? "Now" : <Moment format='DD/MM/YYYY'>{to}</Moment>}
    </p>
    <p>
      <strong>Feelings:</strong> {feelings}
    </p>
    <p>
      <strong>Description:</strong> {description}
    </p>
    <p>
      <strong>Bond Type:</strong> {bond_type}
    </p>
  </div>
);

ProfileExperience.propTypes = {
  experience: PropTypes.array.isRequired
};

export default ProfileExperience;
