import React from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";

const ProfileInterest = ({
  interest: { title, genre, location, from, to, description }
}) => (
  <div>
    <h3 className='text-dark'>{title}</h3>
    <p>
      <Moment format='DD/MM/YYYY'>{from}</Moment> -{" "}
      {!to ? "Now" : <Moment format='DD/MM/YYYY'>{to}</Moment>}
    </p>
    <p>
      <strong>Category:</strong> {genre}
    </p>
    <p>
      <strong>Description:</strong> {description}
    </p>
  </div>
);

ProfileInterest.propTypes = {
  interest: PropTypes.array.isRequired
};

export default ProfileInterest;
