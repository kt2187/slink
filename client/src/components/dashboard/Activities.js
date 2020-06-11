import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import moment from 'moment';
import { connect } from 'react-redux';
import { deleteActivities } from '../../actions/profile';

const Activities = ({ activities, deleteActivities }) => {
  const myActivity = activities.map((act) => (
    <tr key={act._id}>
      <td>{act.type}</td>
      <td className="hide-sm">{act.location}</td>
      <td>
        <Moment format="YYYY/MM/DD">{moment.utc(act.from)}</Moment> -{' '}
        {act.to === null ? (
          ' Now'
        ) : (
          <Moment format="YYYY/MM/DD">{moment.utc(act.to)}</Moment>
        )}
      </td>
      <td>
        <button
          onClick={() => deleteActivities(act._id)}
          className="btn btn-danger"
        >
          Delete
        </button>
      </td>
    </tr>
  ));

  return (
    <Fragment>
      <h2 className="my-2">Activities</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Activity Type</th>
            <th className="hide-sm">Location</th>
            <th className="hide-sm">Years</th>
            <th />
          </tr>
        </thead>
        <tbody>{myActivity}</tbody>
      </table>
    </Fragment>
  );
};

Activities.propTypes = {
  activities: PropTypes.array.isRequired,
  deleteActivities: PropTypes.func.isRequired
};

export default connect(null, { deleteActivities })(Activities);
