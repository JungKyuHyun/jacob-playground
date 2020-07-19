import React, { memo } from 'react';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import { grey } from '@material-ui/core/colors';
import { DEVICE, LINK_STYLE } from 'assets/css/constants';
import { Link } from 'react-router-dom';
import { HOME_PAGE } from 'routers/Url';

export const Header = memo(() => {
  return (
    <HeaderContainer>
      <MenuContainer>
        <Link to={HOME_PAGE} style={LINK_STYLE}>
          <HeaderTitle>Jacob's Playground</HeaderTitle>
        </Link>
        <Button variant="contained" color="primary">
          글쓰기
        </Button>
      </MenuContainer>
    </HeaderContainer>
  );
});

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 44px;
  background: ${grey[900]};
`;

const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 1000px;

  @media (${DEVICE.laptopLg}) {
    margin: 0 24px;
  }
`;

const HeaderTitle = styled.h2`
  color: ${grey[50]};
`;
