import React from 'react';
import PropTypes from 'prop-types';
import Warning from './Notification.styled';


const Notification = ({ text }) => <Warning>{text}</Warning>;


Notification.propTypes = {
  text: PropTypes.string,
};

export default Notification;


