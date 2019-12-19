import React, { Fragment, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addInterest } from "../../actions/profile";

const AddInterest = ({ addInterest, history }) => {
  const [formData, setFormData] = useState({
    title: "",
    genre: "",
    from: "",
    to: "",
    current: false,
    description: ""
  });
  const [toDateDisabled, toggleDisabled] = useState(false);

  const { title, genre, from, to, current, description } = formData;

  const onChange = e =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  return (
    <Fragment>
      <h1 className='large text-primary'>Add An Interest</h1>
      <p className='lead'>
        <i className='fas fa-code-branch'></i> Add any Interest that you fancy
      </p>
      <small>* = required field</small>
      <form
        className='form'
        onSubmit={e => {
          e.preventDefault();
          addInterest(formData, history);
        }}
      >
        <div className='form-group'>
          <input
            type='text'
            placeholder='* Interest Title'
            name='title'
            value={title}
            onChange={e => onChange(e)}
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='* Genre'
            name='genre'
            required
            value={genre}
            onChange={e => onChange(e)}
          />
        </div>
        <div className='form-group'>
          <h4>From Date</h4>
          <input
            type='date'
            name='from'
            value={from}
            onChange={e => onChange(e)}
          />
        </div>
        <div className='form-group'>
          <p>
            <input
              type='checkbox'
              name='current'
              checked={current}
              value=''
              value={current}
              onChange={e => {
                setFormData({ ...formData, current: !current });
                toggleDisabled(!toDateDisabled);
              }}
            />{" "}
            Current ?
          </p>
        </div>
        <div className='form-group'>
          <h4>To Date</h4>
          <input
            type='date'
            name='to'
            value={to}
            onChange={e => onChange(e)}
            disabled={toDateDisabled ? "disabled" : ""}
          />
        </div>
        <div className='form-group'>
          <textarea
            name='description'
            cols='30'
            rows='5'
            placeholder='Express Yourself'
            value={description}
            onChange={e => onChange(e)}
          ></textarea>
        </div>
        <input type='submit' className='btn btn-primary my-1' />
        <Link className='btn btn-light my-1' href='dashboard.html'>
          Go Back
        </Link>
      </form>
    </Fragment>
  );
};

// AddInterest.propTypes = {
//   addInterest: PropTypes.func.isRequired
// };
const mapStateToProps = state => ({
  profile: state.profile
});
export default connect(null, { addInterest })(withRouter(AddInterest));
