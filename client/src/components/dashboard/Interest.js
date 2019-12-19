import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Moment from "react-moment";
import { connect } from "react-redux";
import { deleteInterest } from "../../actions/profile";
const Interest = ({ interest, deleteInterest }) => {
  const interests = interest.map(int => (
    <tr key={int._id}>
      <td>{int.title}</td>
      <td className='hide-sm'>{int.genre}</td>
      <td>
        <Moment format='DD/MM/YYYY'>{int.from}</Moment> -{" "}
        {int.to === null ? (
          " Now"
        ) : (
          <Moment format='DD/MM/YYYY'>{int.to}</Moment>
        )}
      </td>
      <button
        onClick={() => deleteInterest(int._id)}
        className='btn btn-danger'
      >
        {" "}
        Delete{" "}
      </button>
    </tr>
  ));
  return (
    <Fragment>
      <h2 className='my-2'>Interest Credentials</h2>
      <table className='table'>
        <thead>
          <tr>
            <th>Interest</th>
            <th className='hide-sm'>Genre</th>
            <th className='hide-sm'>Duration</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{interests}</tbody>
      </table>
    </Fragment>
  );
};

Interest.propTypes = {
  interest: PropTypes.array.isRequired,
  deleteInterest: PropTypes.func.isRequired
};

export default connect(null, { deleteInterest })(Interest);
