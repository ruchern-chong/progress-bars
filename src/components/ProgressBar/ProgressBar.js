import React from 'react';
import PropTypes from 'prop-types';

const ProgressBar = props => {
  const { bar } = props;

  return <progress value={bar} max={100} />;
};

ProgressBar.propTypes = {
  bar: PropTypes.number
};

export default ProgressBar;
