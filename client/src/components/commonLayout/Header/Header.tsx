import React, { memo } from 'react';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import { grey } from '@material-ui/core/colors';

export const Header = memo(() => {
  return (
    <HeaderContainer>
      <MenuContainer>
        <HeaderTitle>Jacob's Playground</HeaderTitle>
        <Button variant="contained" color="primary">
          Hello World
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
  background: ${grey[900]};
  height: 44px;
`;

const MenuContainer = styled.div`
  display: flex;
  align-items: center;
  width: 1000px;
  justify-content: space-evenly;
`;

const HeaderTitle = styled.h2`
  color: ${grey[50]};
`;
