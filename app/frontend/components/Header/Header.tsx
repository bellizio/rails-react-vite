import React from 'react';
import PropTypes from 'prop-types';
import { HeaderWrapper, SiteNav } from './styles';

const Header = (props) => {
  const { title } = props;

  return (
    <HeaderWrapper>
      <h1>{title}</h1>
      <SiteNav>
        <ul>
          <li>
            <a href="/browse">Browse</a>
          </li>
        </ul>
      </SiteNav>
    </HeaderWrapper>
  );
};

Header.propTypes = {
  title: PropTypes.string,
};

Header.defaultProps = {
  title: 'Header',
};

export default Header;
