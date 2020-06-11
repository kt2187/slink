import React, { Fragment, useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addActivities } from '../../actions/profile';

const AddActivities = ({ addActivities, history }) => {
  const [formData, setFormData] = useState({
    type: '',
    location: '',
    instructor: '',
    from: '',
    to: '',
    current: 'false',
    description: '',
    awards: ''
  });

  const [toDateDisabled, toggleDisabled] = useState(false);

  const {
    type,
    location,
    instructor,
    from,
    to,
    current,
    description,
    awards
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  return (
    <Fragment>
      <h1 class="large text-primary">Add An Activity</h1>
      <p class="lead">
        <i class="fas fa-theater-masks"></i> Add any activities you have have
        participated in
      </p>
      <small>* = required field</small>
      <form
        class="form"
        onSubmit={(e) => {
          e.preventDefault();
          addActivities(formData, history);
        }}
      >
        <div class="form-group">
          <input
            type="text"
            placeholder="* Activity Type"
            name="type"
            value={type}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div class="form-group">
          <input
            type="text"
            placeholder="* Instructor"
            name="instructor"
            value={instructor}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div class="form-group">
          <input
            type="text"
            placeholder="Location"
            name="location"
            value={location}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div class="form-group">
          <input
            type="text"
            placeholder="Awards"
            name="awards"
            value={awards}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div class="form-group">
          <h4>From Date</h4>
          <input
            type="date"
            name="from"
            value={from}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div class="form-group">
          <p>
            <input
              type="checkbox"
              name="current"
              checked={current}
              value={current}
              onChange={(e) => {
                setFormData({ ...formData, current: !current });
                toggleDisabled(!toDateDisabled);
              }}
            />{' '}
            Current Activity
          </p>
        </div>
        <div class="form-group">
          <h4>To Date</h4>
          <input
            type="date"
            name="to"
            value={to}
            onChange={(e) => onChange(e)}
            disabled={toDateDisabled ? 'disabled' : ''}
          />
        </div>
        <div class="form-group">
          <textarea
            name="description"
            cols="30"
            rows="5"
            placeholder="Activity Description"
            value={description}
            onChange={(e) => onChange(e)}
          ></textarea>
        </div>
        <input type="submit" class="btn btn-primary my-1" />
        <a class="btn btn-light my-1" href="dashboard.html">
          Go Back
        </a>
      </form>
    </Fragment>
  );
};

AddActivities.propTypes = {
  addActivities: PropTypes.func.isRequired
};

export default connect(null, { addActivities })(AddActivities);
