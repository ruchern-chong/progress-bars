import React from 'react';
import PropTypes from 'prop-types';

const ProgressBar = props => {
  const { bar, limit } = props;

  return <progress value={bar} max={100} />;
};

ProgressBar.propTypes = {
  bar: PropTypes.number,
  limit: PropTypes.number
};

export default ProgressBar;
