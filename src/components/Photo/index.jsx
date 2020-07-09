import React from 'react';
import PropTypes from 'prop-types';

const Photo = (props) => {
  return (
    <div>
        <img alt={props.alt} src={props.src} />
    </div>
  );
}

Photo.propTypes = {
    alt: PropTypes.string,
    src: PropTypes.string
}

export default Photo;