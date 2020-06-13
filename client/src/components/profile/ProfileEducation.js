import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';

const ProfileEducation = ({
  education: {
    school,
    location,
    grade,
    programofstudy,
    gpa,
    from,
    to,
    current,
    description
  }
}) => (
  <div>
    <h3 className="text-dark">{school}</h3>
    <p>
      <Moment format="YYYY/MM/DD">{from}</Moment> -{' '}
      {!to ? ' Now' : <Moment format="YYYY/MM/DD">{to}</Moment>}
    </p>
    <p>
      <strong>Location: </strong>
      {location}
    </p>
    <p>
      <strong>Grade: </strong>
      {grade}
    </p>
    <p>
      <strong>Program of Study: </strong>
      {programofstudy}
    </p>
    <p>
      <strong>GPA: </strong>
      {gpa}
    </p>
    <p>
      <strong>Description: </strong>
      {description}
    </p>
  </div>
);

ProfileEducation.propTypes = {
  education: PropTypes.array.isRequired
};

export default ProfileEducation;
