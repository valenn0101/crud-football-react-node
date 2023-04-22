import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

const ActionButton = ({ url, type, name, id }) => {
  return (
    <Link key={id} href={url} className={`btn btn-outline-${type}`}>
      {name}
    </Link>
  );
};

export default ActionButton;

ActionButton.propTypes = {
  url: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
