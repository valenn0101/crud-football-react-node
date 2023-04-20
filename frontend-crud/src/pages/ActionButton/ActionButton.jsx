import React from 'react';
import PropTypes from 'prop-types';

const ActionButton = ({ url, type, name }) => {
  return (
    <a href={url} className={`btn btn-outline-${type}`}>
      {name}
    </a>
  );
};

export default ActionButton;

ActionButton.propTypes = {
  url: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
