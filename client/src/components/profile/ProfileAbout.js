import React, { Fragment } from "react";
import PropTypes from "prop-types";

const ProfileAbout = ({
  profile: {
    sex_preferences,
    gender,
    description,
    user: { name }
  }
}) => (
  <div className='profile-about bg-light p-2'>
    {description && (
      <Fragment>
        <h2 className='text-primary'>
          {name.trim().split(" ")[0]}s Descrition
        </h2>
        <p>{description}</p>
        <div className='line'></div>
      </Fragment>
    )}

    <h2 className='text-primary'>Sexual Preferences </h2>
    <div className='skills'>
      {sex_preferences.map((sex_preference, index) => (
        <div key={index} className='p-1'>
          <i className='fas fa-check'></i> {sex_preference}
        </div>
      ))}
    </div>
  </div>
);

ProfileAbout.propTypes = {
  profile: PropTypes.object.isRequired
};

export default ProfileAbout;
