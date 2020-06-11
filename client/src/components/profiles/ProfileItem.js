import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
//import {connect} from 'react-redux';
//import Spinner from '../layout/Spinner';
//import {getProfiles} from '../../actions/profile';

const ProfileItem = ({
  profile: {
    user: { _id, name },
    status,
    school,
    location,
    skills
  }
}) => {
  return (
    <div className="profile bg-light">
      <img
        src="https://via.placeholder.com/150"
        alt="Placeholder image"
        className="round-img"
      />
      <div>
        <h2>{name}</h2>
        <p>
          {status} {school && <span>at {school}</span>}
        </p>
        <p className="my-1">{location && <span>{location}</span>}</p>
        <Link to={`/profile/${_id}`} className="btn btn-primary">
          View Profile
        </Link>
      </div>
      <ul>
        {skills.slice(0, 4).map((skill, index) => (
          <li key={index} className="text-primary">
            <i className="fas fa-check"></i> {skill}
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
