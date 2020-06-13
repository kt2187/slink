import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const ProfileActivities = ({
  activities: {
    type,
    location,
    instructor,
    from,
    to,
    current,
    description,
    awards
  }
}) => (
  <div>
    <h3 className="text-dark">{instructor}</h3>
    <p>
      <Moment format="YYYY/MM/DD">{from}</Moment> -{' '}
      {!to ? ' Now' : <Moment format="YYYY/MM/DD">{to}</Moment>}
    </p>
    <p>
      <strong>Activity Type: </strong>
      {type}
    </p>
    <p>
      <strong>Description: </strong>
      {description}
    </p>
  </div>
);

ProfileActivities.propTypes = {
  activities: PropTypes.array.isRequired
};

export default ProfileActivities;
