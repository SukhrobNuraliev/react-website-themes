import React from 'react';
import PropTypes from 'prop-types';
import { cx } from 'emotion';

import style from '../styles/heading';
import { getByTitle } from '../../../../node_modules/react-testing-library';

const Heading = props => {
  const {
    title,
    children,
    themeStyle = style,
    customStyle = '',
    special = false,
  } = props;

  return (
    <header
      className={`${cx(themeStyle, customStyle)} ${special ? 'special' : ''}`}
    >
      {title ? <h1>{title}</h1> : children}
    </header>
  );
};

Heading.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  themeStyle: PropTypes.string,
  customStyle: PropTypes.string,
  special: PropTypes.bool,
};

export default Heading;
