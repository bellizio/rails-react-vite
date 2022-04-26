import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  background-color: #34bf49;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;

  a {
    color: #000;
    line-height: 1.25;
    text-decoration: none;

    &:visited {
      color: #000;
    }
  }
`;

export const SiteNav = styled.nav`
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
`;
